import React from "react";
import CartDetail from "./CartDetail";
import OrderSummary from "./OrderSummary";

type Props = {};

const CartPage = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-[2]">
        <CartDetail />
      </div>
      <div className="flex-[1]">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartPage;
