// import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	out: './drizzle',
	schema: './src/db/auth_schema.ts',
	dialect: 'turso',
	dbCredentials: {
		url: 'file:local.db'
	},
});
