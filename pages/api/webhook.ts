import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
// import { buffer } from "micro";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const webhookSecret = process.env.WEBHOOK_SECRET_KEY;

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    console.log(req.body);
  }
};
