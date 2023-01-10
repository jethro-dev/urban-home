import React from "react";
import OrderSummaryRow from "./OrderSummaryRow";

type Props = {};

const OrderSummary = (props: Props) => {
  return (
    <div className="ring-2 ring-inset ring-neutral-600 rounded p-4">
      <h1 className="font-medium">Order Summary</h1>

      <div>
        <OrderSummaryRow />
        <OrderSummaryRow />
        <OrderSummaryRow />
        <OrderSummaryRow />
      </div>

      <div className="flex justify-between gap-2 items-center px-2 mb-2">
        <span>Subtotal:</span>
        <span>$39.99</span>
      </div>
      <div className="flex justify-between gap-2 items-center px-2 mb-2">
        <span>Shipping:</span>
        <span>$3.99</span>
      </div>
      <div className="flex justify-between gap-2 items-center px-2 mb-2">
        <span>Total:</span>
        <span>$42.99</span>
      </div>

      <button className="bg-neutral-800 text-neutral-300 py-2 px-4 rounded w-full">
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
