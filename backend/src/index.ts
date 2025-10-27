import { cors } from "@elysiajs/cors";
import { openapi } from "@elysiajs/openapi";
import { Elysia } from "elysia";
import z from "zod";
import { env } from "./env";
import { listWebhooks } from "./routes/list-webhooks";

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

app.use(listWebhooks);

app.listen(env.PORT);

console.log(
	`🔥 HTTP server is running at ${app.server?.hostname}:${app.server?.port}`,
);

console.log(
	`📚 Docs available at ${app.server?.hostname}:${app.server?.port}/docs`,
);
