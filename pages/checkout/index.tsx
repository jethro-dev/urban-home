import React, { ReactElement, useEffect, useState } from "react";
import CartDetail from "../../components/CartDetail";
import OrderSummary from "@components/OrderSummary";
import Layout from "@layout/Layout";
import BannerLayout from "@layout/BannerLayout";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import CheckoutForm from "@components/CheckoutForm";
import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
} from "@stripe/stripe-js";
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
  const cartItems = useSelector((state: RootState) => state.shoppingCart.items);

  console.log(cartItems);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance: Appearance = {
    theme: "stripe",
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <div className="max-w-5xl mx-auto mt-4 lg:mt-6 px-4 lg:px-6">
      {/* [TODO] Add a go back btn and shop more btn */}
      <h3>
        Total:{" "}
        {cartItems.reduce(function (acc, obj) {
          return acc + obj.product.price * obj.quantity;
        }, 0)}
      </h3>
      <div className="w-full relative mb-6">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
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
