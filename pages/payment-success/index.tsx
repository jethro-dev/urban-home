import React, { ReactElement, useEffect, useState } from "react";
import Layout from "@layout/Layout";
import BannerLayout from "@layout/BannerLayout";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
} from "@stripe/stripe-js";
import { useDispatch } from "react-redux";
import { resetCart } from "store/slice/shoppingCartSlice";
import { useRouter } from "next/router";
import { AiOutlineHome, AiOutlineShop } from "react-icons/ai";
import NewsLetter from "@components/NewsLetter";
import Footer from "@components/Footer";
type Props = {};

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const PaymentSuccessPage = (props: Props) => {
  const dispatch = useDispatch();
  const [clientSecret, setClientSecret] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("PaymentIntentID");
    dispatch(resetCart());
    setClientSecret(
      new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      ) as string
    );
  }, []);

  return (
    <div>
      <div className="h-[600px] bg-emerald-200 grid place-items-center text-center text-white">
        <div>
          <h3 className="font-bold text-3xl mb-2.5">
            Your order was successful!
          </h3>
          <p className="mb-2.5">Thank you for shopping with us.</p>
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-white text-emerald-200 rounded-md shadow-sm px-2.5 py-3 font-normal text-sm mr-2.5 flex gap-1 items-center justify-center"
            >
              <span>Home</span>
              <AiOutlineHome />
            </button>
            <button
              type="button"
              className="bg-white text-emerald-200 rounded-md shadow-sm px-2.5 py-3 font-normal text-sm flex gap-1 items-center justify-center"
            >
              <span>Continue shopping</span>
              <AiOutlineShop />
            </button>
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
};

PaymentSuccessPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default PaymentSuccessPage;
