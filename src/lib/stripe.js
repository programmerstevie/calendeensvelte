import Stripe from "stripe";
import { STRIPE_SECRET_KEY } from "$env/static/private";

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function findCheckoutSession(sessionId) {
  return stripe.checkout.sessions.retrieve(sessionId);
}
