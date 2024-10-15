// import type { LayoutServerLoad } from "./$types"

export const load = async (event) => {
  const session = await event.locals.auth();

  return {
    session,
  };
};
