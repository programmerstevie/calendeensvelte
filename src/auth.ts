import { SvelteKitAuth } from "@auth/sveltekit";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Resend from "@auth/sveltekit/providers/resend";
import { AUTH_SECRET, AUTH_RESEND_KEY } from "$env/static/private";

import { getDB } from "./db";
import config from "./config";
import magicLinkTemplate from "../emails/magicLink-template";

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
  const db = await getDB();

  return {
    secret: AUTH_SECRET,
    trustHost: true,
    adapter: DrizzleAdapter(db),
    providers: [
      Resend({
        from: config.resend.fromNoReply,
        name: config.appName,
        apiKey: AUTH_RESEND_KEY,
        async sendVerificationRequest(params) {
          // Define prop values
          const props = {
            domainName: config.domainName,
            appName: config.appName,
            signInLink: params.url,
            headerImageSrc:
              "https://s3.us-east-2.amazonaws.com/assets.calendeen.site/calendeen_email_header.png", // "https://placehold.co/600x400",
            actionDescription: "manage your schedule and pray on time!",
            supportEmail: config.resend.supportEmail,
            year: 2024
          };

          // Create the email template and replace handlebars with prop values.
          const html = magicLinkTemplate(props);

          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${params.provider.apiKey}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              from: params.provider.from,
              to: params.identifier,
              subject: `Sign in to ${props.appName}`,
              html,
              text: `Sign in to ${props.appName},\n${props.signInLink}\n\n`
            })
          });

          if (!res.ok) throw new Error("Resend error: " + JSON.stringify(await res.json()));
        }
      })
    ]
  };
});
