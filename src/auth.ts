import { SvelteKitAuth } from "@auth/sveltekit";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Resend from "@auth/sveltekit/providers/resend";

import { getDB } from "./db";
import config from "./config";

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
  const db = await getDB();

  return {
    trustHost: true,
    adapter: DrizzleAdapter(db),
    providers: [
      Resend({
        from: config.resend.fromNoReply,
        name: config.appName
      })
    ]
  };
});
