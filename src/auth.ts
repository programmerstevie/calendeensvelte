import { SvelteKitAuth } from '@auth/sveltekit';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import Resend from '@auth/sveltekit/providers/resend';

import { createDrizzleInstance } from './db';

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
	// event.platform.env.TURSO_DATABASE_URL
	// event.platform.env.TURSO_AUTH_TOKEN

	const db = await createDrizzleInstance();

	return {
		adapter: DrizzleAdapter(db),
		providers: [
			Resend({
				from: 'Calendeen <noreply@calendeen.site>',
				name: 'Calendeen'
			})
		]
	};
});
