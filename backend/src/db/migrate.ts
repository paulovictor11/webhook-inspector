import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from ".";

async function main() {
	try {
		await migrate(db, {
			migrationsFolder: "src/infra/database/migrations",
			migrationsSchema: "public",
		});
		await db.$client.end();
		console.log("Migrations have been executed");
	} catch (err) {
		console.log(err);
	}
}

main();
