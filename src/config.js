import themes from "daisyui/src/theming/themes.js";

const config = {
  // REQUIRED - The name of your application.
  appName: "Calendeen",
  // REQUIRED (no https://, no trailing slash at the end, just the naked domain)
  domainName: "calendeen.site",
  crisp: {
    // Crisp website ID.
    // IF YOU DON'T USE CRISP:
    // just remove this => Then add a supportEmail under mailgun
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport />
    onlyShowOnRoutes: ["/"]
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here.
    // You can add as many plans as you want, just make sure to add the priceId.
    plans: [
      {
        // Required - we use this to find the plan in the webhook
        // (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "production" ? "price_SLKDHkjh8yP8UPO98pouikj" : "price_456",
        // REQUIRED - Name of the plan, displayed on the pricing page
        name: "Starter",
        // A friendly description of the plan, displayed on the pricing page.
        // Tip: explain why this plan and not others.
        description: "Perfect for small projects",
        // The price you want to display, the one user will be charged on Stripe.
        price: 79,
        // If you have an anchor price (i.e. $99) that you want to display crossed out,
        // put it here. Otherwise, leave it empty.
        priceAnchor: 99,
        features: [
          { name: "SvelteKit boilerplate" },
          { name: "User oauth" },
          { name: "Database" },
          { name: "Emails" }
        ]
      },
      // Repeat the above plan properties for each plan you want to add.
      {
        // This plan will look different on the pricing page. It will be highlighted.
        // You can only have one plan with isFeatured: true.
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "production" ? "price_SLKDHkjh8ygdfgP8UPO98pouikj" : "price_789",
        name: "Professional",
        description: "Perfect for larger projects",
        price: 149,
        priceAnchor: 149,
        features: [
          { name: "NextJS boilerplate" },
          { name: "User oauth" },
          { name: "Database" },
          { name: "Emails" },
          { name: "Chat" },
          { name: "Project management" }
        ]
      }
    ]
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/"
  },
  // mailgun: {
  //   // subdomain to use when sending emails, if you don't have a subdomain, just remove it.
  //   // Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
  //   subdomain: "mg",
  //   // REQUIRED - Email 'From' field to be used when sending magic login links
  //   fromNoReply: `ShipFast <noreply@mg.shipfa.st>`,
  //   // REQUIRED - Email 'From' field to be used when sending other emails, like abandoned carts, updates etc...
  //   fromAdmin: `Steven at ShipFast <steb@mg.shipfa.st>`,
  //   // Email shown to customer if need support. Leave empty if not needed =>
  //   // if empty, set up Crisp, otherwise you won't be able to offer customer support.
  //   supportEmail: "steb@mg.shipfa.st",
  //   // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost).
  //   // If you set supportEmail to empty, this is used as a fallback.
  //   forwardRepliesTo: "stevensan0606@gmail.com",
  // },
  resend: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it.
    // Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mail",
    // REQUIRED - Email 'From' field to be used when sending magic login links
    fromNoReply: `Calendeen <noreply@mail.calendeen.site>`,
    // REQUIRED - Email 'From' field to be used when sending other emails, like abandoned carts, updates etc...
    fromAdmin: `Steven at Calendeen <steb@mail.calendeen.site>`,
    // Email shown to customer if need support. Leave empty if not needed =>
    // if empty, set up Crisp, otherwise you won't be able to offer customer support.
    supportEmail: "support@mail.calendeen.site",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost).
    // If you set supportEmail to empty, this is used as a fallback.
    forwardRepliesTo: "stevensan0606@gmail.com"
  },
  colors: {
    // REQUIRED - The DaisyUI theme to use (added to _document.jsx). Leave blank for default (light and dark mode).
    theme: "retro",

    // REQUIRED - This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc).
    // By default it takes the primary color.
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes["retro"]["primary"]
  },
  // REQUIRED - the path you want to redirect users to after successful login
  // (i.e. /dashboard, /private), This is normally a private pages for users to manage their account/product
  callbackUrl: "/dashboard"
};

export default config;
