import { NextApiRequest, NextApiResponse } from "next";
import { ShoppingCartItem } from "typings";
import {
  calculateOrderAmount,
  calculateOrderAmountWithShipping,
} from "utils/calculateOrderAmount";

// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    items,
    payment_intent_id,
  }: { items: ShoppingCartItem[]; payment_intent_id: string } = req.body;
  const amount = calculateOrderAmountWithShipping(items) * 100;

  console.log("jTest: /api/stripe-payment-intent starts");
  if (payment_intent_id) {
    console.log("jTest: has old payment intent");
    try {
      // If a payment_intent_id is passed, retrieve the paymentIntent
      const current_intent = await stripe.paymentIntents.retrieve(
        payment_intent_id
      );

      // If a paymentIntent is retrieved update its amount
      if (current_intent) {
        const updated_intent = await stripe.paymentIntents.update(
          payment_intent_id,
          {
            amount,
          }
        );
        res.status(200).json(updated_intent);
        console.log("jTest: old payment intent reused");
        return;
      }
    } catch (e: any) {
      //Catch any error and return a status 500
      if (e.code !== "resource_missing") {
        const errorMessage =
          e instanceof Error ? e.message : "Internal server error";
        res.status(500).json({ statusCode: 500, message: errorMessage });
        return;
      }
    }
  }

  try {
    const params = {
      amount,
      currency: "gbp",
      description: "Payment description",
      automatic_payment_methods: {
        enabled: true,
      },
    };
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create(params);
    console.log("jTest: created new payment intent");

    //Return the payment_intent object
    res.status(200).json(paymentIntent);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ statusCode: 500, message: errorMessage });
  }

  // res.send({
  //   clientSecret: paymentIntent.client_secret,
  // });
}
