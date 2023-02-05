import Link from "next/link";
import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "store";

type Props = {
  toggleCart: Function;
};

const CartModal = ({ toggleCart }: Props) => {
  const cartItems = useSelector((state: RootState) => state.shoppingCart.items);
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 h-[100vh] bg-black bg-opacity-80 z-[99] flex justify-end">
      {/* left modal */}
      <div className="bg-black h-full w-full md:w-screen md:max-w-md ring-1 ring-neutral-800">
        {/* header */}
        <div className="h-[74px] px-6 mb-[59px] lg:mb-0">
          <div className="flex items-center justify-between flex-1 h-full">
            <button
              onClick={() => toggleCart()}
              className="flex items-center gap-1 text-sm font-medium hover:text-white text-neutral-300 transition-all"
            >
              <IoCloseOutline size={24} />
              <span>Close</span>
            </button>
            <nav>
              <ul className="flex gap-6">
                <li className="grid place-items-center">
                  <button
                    aria-label="Cart items: 0"
                    // onClick={() => alert("hello")}
                  >
                    <FiShoppingBag
                      size={28}
                      className="hover:scale-105 transition-all"
                    />
                  </button>
                </li>
                <li className="grid place-items-center">
                  <button
                    className="hover:ring-2 hover:scale-105 ring-white rounded-full overflow-hidden transition-all"
                    onClick={() => toggleCart()}
                  >
                    <div className="bg-red-500 w-[28px] h-[28px]"></div>
                  </button>
                </li>
                <li className="md:hidden grid place-items-center">
                  <button data-variant="naked" aria-label="Menu">
                    <HiMenuAlt3 size={28} />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* cart modal content */}
        <div className="p-5 flex flex-col gap-4">
          <div className="p-5 ring-1 ring-neutral-800 px-2 py-2 rounded">
            {cartItems.map((cartItem) => (
              <div>
                <h3>{cartItem.id}</h3>
                <h3>{cartItem.product.name}</h3>
                <h3>{cartItem.quantity}</h3>
              </div>
            ))}
          </div>
          <Link
            href="/cart"
            className="ring-1 ring-neutral-800 px-2 py-2 rounded text-center hover:ring-neutral-700"
            onClick={() => toggleCart()}
          >
            Go to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
