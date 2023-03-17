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
import OrderSummaryLayout from "@layout/OrderSummaryLayout";

type Props = {};

const Cart = (props: Props) => {
  const cartItems = useSelector((state: RootState) => state.shoppingCart.items);
  return <CartDetail />;
};

Cart.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BannerLayout>
        <OrderSummaryLayout>{page}</OrderSummaryLayout>
      </BannerLayout>
    </Layout>
  );
};

export default Cart;
