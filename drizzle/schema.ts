import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const users = sqliteTable("users", {
	id: integer().primaryKey(),
	name: text().notNull(),
	age: integer().notNull(),
	email: text().notNull(),
});

export const posts = sqliteTable("posts", {
	id: integer().primaryKey(),
	title: text().notNull(),
	content: text().notNull(),
	userId: integer("user_id").notNull().references(() => users.id),
	createdAt: text("created_at").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
});