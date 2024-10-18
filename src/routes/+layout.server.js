// import type { LayoutServerLoad } from "./$types"

export const load = async (event) => {
  // const session = await event.locals.auth();

  /**
   * @type {Env}
   */
  const public_env = {
    PUBLIC_STRIPE_PUBLISHABLE_KEY: event.platform.env.PUBLIC_STRIPE_PUBLISHABLE_KEY
  };

  return {
    public_env
    // session
  };
};
