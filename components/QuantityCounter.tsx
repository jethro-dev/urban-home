import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItemQuantity } from "store/slice/shoppingCartSlice";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RootState } from "store";

interface Props {
  itemId: string;
}

const QuantityCounter: React.FC<Props> = ({ itemId }) => {
  const quantity = useSelector(
    (state: RootState) =>
      state.shoppingCart.items.find((item) => item.id === itemId)!.quantity
  );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   first;
  // }, [third]);

  const handleIncrement = () => {
    dispatch(updateItemQuantity({ id: itemId, quantity: quantity + 1 }));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(updateItemQuantity({ id: itemId, quantity: quantity - 1 }));
    }
  };

  return (
    <div className="relative ring-1 ring-neutral-200 p-2 flex gap-2 items-center">
      <button
        onClick={handleDecrement}
        className="px-1 h-full text-neutral-700 hover:text-black transition-colors"
      >
        <FiMinus />
      </button>
      <input
        type="number"
        value={quantity}
        readOnly
        className="h-6 w-[50px] text-center border-none outline-none text-black font-semibold"
      />
      <button
        onClick={handleIncrement}
        className="px-1 h-full text-neutral-700 hover:text-black transition-colors"
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default QuantityCounter;
