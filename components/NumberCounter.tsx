import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

type Props = {
  className?: string;
  onNumberChange: Function;
};

const NumberCounter = ({ className, onNumberChange }: Props) => {
  const [number, setNumber] = useState<number>(1);

  const handleNumberChange = (value: number) => {
    if (value <= 0) value = 1;
    setNumber(value);
    onNumberChange(value);
  };

  return (
    <div className="relative ring-1 ring-neutral-200 p-2 flex gap-2 items-center">
      <button
        onClick={() => handleNumberChange(number - 1)}
        className="px-1 h-full text-neutral-700 hover:text-black transition-colors"
      >
        <FiMinus />
      </button>
      <input
        type="number"
        value={number}
        onChange={(e) => handleNumberChange(e.target.valueAsNumber)}
        className="h-full w-[50px] text-center border-none outline-none text-black font-semibold"
      />
      <button
        onClick={() => handleNumberChange(number + 1)}
        className="px-1 h-full text-neutral-700 hover:text-black transition-colors"
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default NumberCounter;
