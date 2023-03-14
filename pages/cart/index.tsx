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

const Cart = (props: Props) => {
  const cartItems = useSelector((state: RootState) => state.shoppingCart.items);

  console.log(cartItems);

  return (
    <div className="max-w-7xl mx-auto mt-4 lg:mt-6 px-4 lg:px-6">
      <div className="w-full relative gap-4 grid grid-cols-12 mb-6">
        <div className="col-span-12 md:col-span-7 w-full">
          <CartDetail />
        </div>
        <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

Cart.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BannerLayout>{page}</BannerLayout>
    </Layout>
  );
};

export default Cart;
