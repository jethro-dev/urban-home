import React, { ReactElement, useEffect, useState } from "react";
import Layout from "@layout/Layout";
import BannerLayout from "@layout/BannerLayout";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch } from "react-redux";
import { resetCart } from "store/slice/shoppingCartSlice";
type Props = {};

const PaymentSuccessPage = (props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem("PaymentIntentID");
    dispatch(resetCart());
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    console.log({ clientSecret });
  }, []);

  return <div>PaymentSuccessPage</div>;
};

PaymentSuccessPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BannerLayout>{page}</BannerLayout>
    </Layout>
  );
};
export default PaymentSuccessPage;
