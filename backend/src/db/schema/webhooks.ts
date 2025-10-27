import { randomUUIDv7 } from "bun";
import { integer, jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const webhooks = pgTable("webhooks", {
	id: text()
		.primaryKey()
		.$defaultFn(() => randomUUIDv7()),
	method: text().notNull(),
	pathname: text().notNull(),
	ip: text().notNull(),
	statusCode: integer().notNull().default(200),
	contentType: text(),
	contentLength: integer(),
	queryParams: jsonb().$type<Record<string, string>>(),
	headers: jsonb().$type<Record<string, string>>().notNull(),
	body: text(),
	createdAt: timestamp().notNull().defaultNow(),
});
