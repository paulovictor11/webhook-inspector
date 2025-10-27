import { cors } from "@elysiajs/cors";
import { openapi } from "@elysiajs/openapi";
import Elysia from "elysia";
import z from "zod";

export const createApp = () => {
	const app = new Elysia();
	app.use(
		cors({
			origin: "http://localhost:5173",
			methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
			credentials: true,
			allowedHeaders: ["Content-Type", "Authorization"],
		}),
	);
	app.use(
		openapi({
			path: "/docs",
			documentation: {
				info: {
					title: "Webhook Inspector API",
					description: "API for capturing and inspecting webhook requests",
					version: "1.0.0",
				},
			},
			mapJsonSchema: {
				zod: z.toJSONSchema,
			},
		}),
	);
	return app;
};
