import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateItemQuantity } from "store/slice/shoppingCartSlice";
import { FiMinus, FiPlus } from "react-icons/fi";

interface Props {
  itemId: string;
  quantity: number;
}

const QuantityCounter: React.FC<Props> = ({ itemId, quantity }) => {
  const [count, setCount] = useState(quantity);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateItemQuantity({ id: itemId, quantity: count + 1 }));
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      dispatch(updateItemQuantity({ id: itemId, quantity: count - 1 }));
      setCount(count - 1);
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
        value={count}
        readOnly
        className="h-6 w-8 border-none outline-none text-black font-semibold"
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
