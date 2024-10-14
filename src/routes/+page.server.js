import { getDB } from "@/db";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const db = await getDB();

  return {
    post: 1
  };
}
