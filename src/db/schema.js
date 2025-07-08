import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const table = sqliteTable("user", {
    id: integer().notNull().primaryKey({ autoIncrement: true }),
    userName: text().notNull().unique(),
    email: text().notNull().unique(),
    password: text().notNull(),
    createdAt: integer({ mode: "timestamp" }).notNull().default(0),
    updatedAt: integer({ mode: "timestamp" }).notNull().default(0),
});
