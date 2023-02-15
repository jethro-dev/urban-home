import React from "react";
import { ShoppingCartItem } from "typings";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "store/slice/shoppingCartSlice";
import { Product, Variant } from "@prisma/client";
import { nanoid } from "nanoid";
type Props = {
  product: Product;
  variant: Variant;
  quantity: number;
};

const AddToCartBtn = ({ product, variant, quantity }: Props) => {
  const dispatch = useDispatch();
  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal rounded text-sm h-10 w-40 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={() =>
        dispatch(
          addItem({
            id: nanoid(),
            product,
            variant,
            quantity,
          })
        )
      }
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
