import { createClient } from '@libsql/client';

import s from '../db';

// export const turso = createClient({
// 	url: process.env.TURSO_DATABASE_URL,
// 	authToken: process.env.TURSO_AUTH_TOKEN
// });

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	

	return {
		post: 1
	};
}
