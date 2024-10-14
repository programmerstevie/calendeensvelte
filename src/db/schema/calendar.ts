import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const calendars = sqliteTable("calendar", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  image: text("image")
});
