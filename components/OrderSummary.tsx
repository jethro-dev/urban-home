import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { removeItem } from "store/slice/shoppingCartSlice";
import OrderSummaryRow from "./OrderSummaryRow";
import QuantityCounter from "./QuantityCounter";

type Props = {};

const OrderSummary = (props: Props) => {
  const cartItems = useSelector((state: RootState) => state.shoppingCart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="ring-1 ring-neutral-200 rounded p-4">
      <h1 className="font-medium text-base mb-4">Order Summary</h1>

      <div className="flex justify-between gap-2 items-center mb-2 text-sm">
        <span>Subtotal ({cartItems.length} items)</span>
        <span>
          $
          {cartItems.reduce(function (acc, obj) {
            return acc + obj.product.price * obj.quantity;
          }, 0)}
        </span>
      </div>

      <div className="flex justify-between gap-2 items-center mb-2 text-sm">
        <span>Shipping</span>
        <span>$5</span>
      </div>

      <div className="flex justify-between gap-2 items-center mb-2 text-sm">
        <span>Total</span>
        <span>
          $
          {cartItems.reduce(function (acc, obj) {
            return acc + obj.product.price * obj.quantity;
          }, 0) + 5}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1 rounded-md">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <div
              key={`${cartItem.id}`}
              className="flex items-center justify-between gap-2 py-1"
            >
              {/* left */}
              <div className="relative aspect-square h-[50px]">
                <Image
                  src={cartItem.variant.image}
                  alt={cartItem.variant.name}
                  fill={true}
                  className="object-cover p-1"
                />
              </div>
              {/* mid */}
              <div className="flex-1 py-2">
                <h3 className="font-bold text-xs">{cartItem.product.name}</h3>
                <h4 className="font-light text-xs">{cartItem.variant.name}</h4>
                <h4 className="font-light text-xs">
                  ${cartItem.product.price}
                </h4>
              </div>
              {/* right */}
              <div className="p-4 flex flex-col items-center gap-2">
                <QuantityCounter itemId={`${cartItem.id}`} />
                <button
                  className="hover:underline text-xs font-light text-neutral-500 hover:decoration-neutral-500"
                  onClick={() => dispatch(removeItem(cartItem))}
                >
                  remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="h-[100vh] grid place-items-center">
            <div>
              <h3 className="text-sm font-light text-neutral-700">
                Your cart is empty. Add some item to your cart!
              </h3>
            </div>
          </div>
        )}
      </div>

      {router.pathname === "/cart" && (
        <Link
          href={`/checkout`}
          className="bg-green-600 text-white py-2 px-4 rounded w-full inline-block text-center"
        >
          Checkout
        </Link>
      )}
    </div>
  );
};

export default OrderSummary;
