import { NextApiRequest, NextApiResponse } from "next";
import { ShoppingCartItem } from "typings";

// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (cartItems: ShoppingCartItem[]) => {
  return (
    cartItems.reduce(function (acc, obj) {
      return acc + obj.product.price * obj.quantity;
    }, 0) + 5
  );
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items) * 100,
    currency: "gbp",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
