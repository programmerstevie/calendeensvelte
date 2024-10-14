import { sqliteTable, AnySQLiteColumn, integer } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const users = sqliteTable("users", {
	id: integer().primaryKey(),
});