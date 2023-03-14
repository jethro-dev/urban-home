import React, { ReactElement, useEffect, useState } from "react";
import Layout from "@layout/Layout";
import BannerLayout from "@layout/BannerLayout";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
type Props = {};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const PaymentSuccessPage = (props: Props) => {
  const stripe = useStripe();
  const [message, setMessage] = useState<null | string>(null);
  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent!.status) {
        case "succeeded":
          setMessage("Payment succeeded!");

          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }

      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  }, [stripe]);

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
