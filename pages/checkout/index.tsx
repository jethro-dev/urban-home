import CheckoutForm from "@components/CheckoutForm";
import Layout from "@layout/Layout";
import BannerLayout from "@layout/BannerLayout";
import { Elements } from "@stripe/react-stripe-js";
import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
} from "@stripe/stripe-js";
import React, { useState, useEffect, ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import OrderSummary from "@components/OrderSummary";
import OrderSummaryLayout from "@layout/OrderSummaryLayout";
import { resetCart } from "../../store/slice/shoppingCartSlice";

type Props = {};

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutPage = (props: Props) => {
  const [clientSecret, setClientSecret] = useState<string>("");
  const [paymentIntent, setPaymentIntent] = useState<string>(
    localStorage.getItem("PaymentIntentID") || ""
  );
  const cartItems = useSelector((state: RootState) => state.shoppingCart.items);

  useEffect(() => {
    console.log("cart page useEffect run");
    // Create PaymentIntent as soon as the page loads using our local API
    fetch("/api/stripe-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cartItems,
        payment_intent_id: paymentIntent,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.client_secret);
        setPaymentIntent(data.id);
        localStorage.setItem("PaymentIntentID", data.id);
      });
  }, [cartItems]);

  const appearance: Appearance = {
    theme: "stripe",
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm paymentIntent={paymentIntent} />
        </Elements>
      )}
    </>
  );
};

CheckoutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BannerLayout>
        <OrderSummaryLayout>{page}</OrderSummaryLayout>
      </BannerLayout>
    </Layout>
  );
};

export default CheckoutPage;
