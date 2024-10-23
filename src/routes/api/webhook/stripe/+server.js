// import { error } from "@sveltejs/kit";
import Stripe from "stripe";
import { getDB } from "@/db";
import { STRIPE_WEBHOOK_SECRET, STRIPE_SECRET_KEY } from "$env/static/private";
// import { error } from "@sveltejs/kit";
import { findCheckoutSession } from "$lib/stripe";
import configFile from "@/config";
import { users } from "@/db/schema/auth";
import { eq } from "drizzle-orm";

const stripe = new Stripe(STRIPE_SECRET_KEY);

/** @type {import('./$types').RequestHandler} */
export async function POST({ url, request }) {
  const db = await getDB();

  const webhookSecret = STRIPE_WEBHOOK_SECRET;

  let data;
  let eventType;

  if (webhookSecret) {
    let event;
    const signature = request.headers["stripe-signature"];

    // verify Stripe event is legit
    try {
      event = await stripe.webhooks.constructEvent(request.body, signature, webhookSecret);
    } catch (err) {
      console.error("Error with Stripe webhook:", err.message);
      return new Response(null, {
        status: 400
      });
    }
    data = event.data;
    eventType = event.type;
  } else {
    data = request.body.data;
    eventType = request.body.type;
  }

  try {
    switch (eventType) {
      case "checkout.session.completed": {
        // First payment is successful and the subscription is created
        // | or the subscription was updated during a Checkout Session
        // (such as upgrading or changing the plan) and the payment succeeded."

        //! TODO: IMPLEMENT FINDCHECKOUTSESSION
        const session = await findCheckoutSession(data.object.id);

        const customerId = session?.customer;
        const priceId = session?.line_items?.data[0]?.price.id;
        const userId = data.object.client_reference_id;
        const plan = configFile.stripe.plans.find(() => p.priceId === priceId);

        if (!plan) break;

        const customer = await stripe.customers.retrieve(customerId);

        let user;

        // Get or create the user, userId is normally passed in the checkout session (clientReference) /././
        if (userId) {
          [user] = await db.select().from(users).where(eq(users.userId, userId)).limit(1);
        } else if (customer.email) {
          [user] = await db.select().from(users).where(eq(users.email, customer.email)).limit(1);

          if (!user) {
            [user] = await db
              .insert(users)
              .values({
                email: customer.email,
                name: customer.name
              })
              .returning();
          }
        } else {
          console.error("No user found");
          throw new Error("No user found");
        }

        // update user data (for instance add credits)
        user.priceId = priceId;
        user.customerId = customerId;
        await db.update(users).set(user).where(eq(users.userId, user.userId));

        // Extra: send email with user link, product page, etc...
        // try {
        //   await sendEmail(...)
        // } catch (err) {
        //   console.error('Error sending email:', err?.message);
        // }

        break;
      }
      case "checkout.session.expired": {
        // User didn't complete the transaction
        // Can send an email to the user to remind them to complete the transaction, for instance:
        // We noticed you were just a few clicks away from completing your purchase, but your checkout session expired. Don’t worry – it happens! The good news is, your favorite items are still waiting for you.
        break;
      }

      case "customer.subscription.ended": {
        // The customer might have changed the plan.

        const subscription = await stripe.subscriptions.retrieve(data.object.id);
        const planId = subscription?.items?.data[0]?.price?.id;
        // Do any operation here
        break;
      }

      case "customer.subscription.deleted": {
        // The customer stopped the subscription.
        break;
      }

      default:
      // Unhandled event type
    }
  } catch (e) {
    console.error("Error handling Stripe event:", e.message);
  }

  return new Response(null, {
    status: 200
  });
}
