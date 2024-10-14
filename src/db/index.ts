import { drizzle } from "drizzle-orm/libsql";

import { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN, NODE_ENV } from "$env/static/private";

const getClient = async () => {
  switch (NODE_ENV) {
    case "development":
      return (await import("@libsql/client")).createClient({
        url: "file:local.db"
      });
    case "production":
    default:
      return (await import("@libsql/client/web")).createClient({
        url: TURSO_DATABASE_URL as string,
        authToken: TURSO_AUTH_TOKEN as string
      });
    // default:
    // 	throw new Error('Unsupported NODE_ENV');
  }
};

export const getDB = async () => {
  const client = await getClient();
  const db = drizzle(client);

  return db;
};
