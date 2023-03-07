import Image from "next/image";
import React from "react";
import { ShoppingCartItem } from "typings";

type Props = {
  item: ShoppingCartItem;
};

const CartDetailRow = ({ item }: Props) => {
  return (
    <div className="ring-2 ring-inset ring-neutral-600 p-4 rounded flex">
      <Image
        src={item.variant.image}
        alt="Rick"
        width={100}
        height={100}
        className="p-4"
      />
      <div className="p-2">
        <h1 className="text-xs">{item.product.name}</h1>
        <p className="text-xs">
          Quantity:{" "}
          <div className="flex h-10 gap-2 mb-2">
            <button className="w-10 bg-white text-black rounded text-xl font-semibold">
              -
            </button>
            <span className="rounded bg-white px-4 grid place-items-center">
              {item.quantity}
            </span>
            <button className="w-10 bg-white text-black rounded text-xl font-semibold">
              +
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default CartDetailRow;
