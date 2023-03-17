import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { removeItem, updateItemQuantity } from "store/slice/shoppingCartSlice";
import Drawer from "./Drawer";
import NumberCounter from "./NumberCounter";
import QuantityCounter from "./QuantityCounter";

type Props = {
  isOpen: boolean;
  toggleCart: React.MouseEventHandler;
  title: String;
};

const CartDrawer = ({ isOpen, toggleCart, title }: Props) => {
  const cartItems = useSelector((state: RootState) => state.shoppingCart.items);
  const dispatch = useDispatch();
  return (
    <Drawer isOpen={isOpen} setIsOpen={toggleCart} title={title}>
      <div className="flex flex-col h-full justify-between py-4 gap-4 max-h-[calc(100vh-70px)]">
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
                  <h4 className="font-light text-xs">
                    {cartItem.variant.name}
                  </h4>
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

        {/* lower */}
        <div className="flex-shrink-0 flex justify-between gap-2 h-[60px]">
          <div className="w-[40%] flex items-center gap-1 px-2">
            <h3 className="font-normal text-sm">Subtotal:</h3>
            <span className="font-semibold text-base">
              $
              {cartItems.reduce(function (acc, obj) {
                return acc + obj.product.price * obj.quantity;
              }, 0)}
            </span>
          </div>
          <Link
            href={`/cart`}
            onClick={toggleCart}
            className="bg-red-800 grid place-items-center text-white w-full rounded-md"
          >
            Go to cart
          </Link>
        </div>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
