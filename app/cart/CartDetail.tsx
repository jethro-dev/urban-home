import Image from "next/image";
import React from "react";
import CartDetailRow from "./CartDetailRow";

type Props = {};

const CartDetail = (props: Props) => {
  return (
    <div className="ring-2 ring-inset ring-neutral-600 p-4">
      <h1 className="mb-2">Cart</h1>
      {/* cartdetailsrow */}
      <div className="flex flex-col gap-2">
        <CartDetailRow />
        <CartDetailRow />
        <CartDetailRow />
      </div>
    </div>
  );
};

export default CartDetail;
