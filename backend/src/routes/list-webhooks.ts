import Elysia from "elysia";
import z from "zod";

export const listWebhooks = async () => {
	return new Elysia({ prefix: "/api/webhooks" }).get(
		"/",
		async ({ query }) => {
			const { limit } = query;
			return [
				{
					id: "123",
					method: "POST",
				},
			];
		},
		{
			detail: {
				summary: "List Webhooks",
				tags: ["Webhooks"],
			},
			query: z.object({
				limit: z.coerce.number().min(1).max(100).default(20),
			}),
			response: {
				200: z.array(
					z.object({
						id: z.string(),
						method: z.string(),
					}),
				),
			},
		},
	);
};
