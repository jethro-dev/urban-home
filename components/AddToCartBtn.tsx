import React from "react";
import { ShoppingCartItem } from "typings";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "store/slice/shoppingCartSlice";
import { Product, Variant } from "@prisma/client";
import { nanoid } from "nanoid";
import { IoBagAddOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "./Toast";
type Props = {
  product: Product;
  variant: Variant;
  quantity: number;
  large?: boolean;
};

const AddToCartBtn = ({ product, variant, quantity, large }: Props) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(
      addItem({
        id: nanoid(),
        product,
        variant,
        quantity,
      })
    );
    toast.success("Added to cart 🛒", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <button
        className={`${
          !large
            ? `h-10 w-10 rounded-full bg-violet-700 hover:bg-violet-800 transition-all grid place-items-center`
            : `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal rounded text-sm h-10 w-40 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`
        }`}
        onClick={handleOnClick}
      >
        {large ? (
          "Add to Cart"
        ) : (
          <IoBagAddOutline size={22} className="text-white" />
        )}
      </button>
    </>
  );
};

export default AddToCartBtn;
