import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
  AddressElement,
} from "@stripe/react-stripe-js";
import {
  PaymentIntent,
  StripeError,
  StripePaymentElementOptions,
} from "@stripe/stripe-js";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { DefaultValuesOption } from "@stripe/stripe-js";
import CheckoutFormUserPanel from "./CheckoutFormUserPanel";
import { resetCart } from "store/slice/shoppingCartSlice";
import { SyncLoader } from "react-spinners";
import { useDispatch } from "react-redux";

interface Props {
  paymentIntent: string;
}

export default function CheckoutForm({ paymentIntent }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
          localStorage.removeItem("PaymentIntentID");
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
    });
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // [FIXME] Make sure to change this to your payment completion page
        return_url:
          process.env.NODE_ENV === "production"
            ? "https://urban-home.vercel.app/payment-success"
            : "http://localhost:3000/payment-success",
        receipt_email: email,
      },
    });
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message as string);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "tabs",
    // TODO
    defaultValues: {
      billingDetails: {
        // name: session?.user?.name || undefined,
        email: session?.user?.email || undefined,
      },
    },
  };

  console.log({ email });

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="ring-1 ring-neutral-200 rounded-md shadow-sm p-4 space-y-4"
    >
      <CheckoutFormUserPanel />
      <LinkAuthenticationElement
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <AddressElement
        options={{
          mode: "shipping",
          // display: {
          //   name: "split",
          // },
          defaultValues: { name: session?.user?.name },
        }}
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="w-full bg-emerald-800 text-white py-2.5 rounded-md shadow-sm"
      >
        <span id="button-text">
          {isLoading ? <SyncLoader color="#ffffff" size={14} /> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && (
        <div id="payment-message" className="text-red-500 text-sm">
          {message}
        </div>
      )}
    </form>
  );
}
