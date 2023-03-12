import React, { ReactElement, useEffect, useState } from "react";
import CartDetail from "../../components/CartDetail";
import OrderSummary from "@components/OrderSummary";
import Layout from "@layout/Layout";
import BannerLayout from "@layout/BannerLayout";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import CheckoutForm from "@components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

type Props = {};

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutPage = (props: Props) => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="max-w-7xl mx-auto mt-4 lg:mt-6 px-4 lg:px-6">
      <div className="w-full relative gap-4 lg:gap-8 grid grid-cols-12 mb-6">
        <div className="col-span-12 md:col-span-7 lg:col-span-8  w-full">
          <CartDetail />
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col gap-4">
          <OrderSummary />
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
};

CheckoutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BannerLayout>{page}</BannerLayout>
    </Layout>
  );
};

export default CheckoutPage;
