import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { ShoppingCartItem } from "typings";
import CartDetailRow from "./CartDetailRow";
import QuantityCounter from "./QuantityCounter";

type Props = {};

const CartDetail = ({}: Props) => {
  const cartItems = useSelector((state: RootState) => state.shoppingCart.items);
  const dispatch = useDispatch();
  return (
    <div className="ring-2 ring-inset ring-neutral-600 p-4">
      <h1 className="mb-2">Cart</h1>
      {/* cartdetailsrow */}
      <div className="flex flex-1 flex-col gap-1 ring-1 ring-neutral-200  rounded-md py-1 overflow-auto scrollbar">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <div
              key={`${cartItem.id}`}
              className="h-[120px] flex items-stretch justify-between gap-2 py-1"
            >
              {/* left */}
              <div className="relative aspect-square">
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
                <QuantityCounter
                  itemId={`${cartItem.id}`}
                  quantity={cartItem.quantity}
                />
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
    </div>
  );
};

export default CartDetail;
