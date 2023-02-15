import React, { useState } from "react";

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
    <div
      className={`custom-number-input h-10 w-32 ${
        className ? ` ${className}` : ""
      }`}
    >
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 items-stretch">
        <button
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={() => handleNumberChange(number - 1)}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 border-t-0 border-b-0"
          name="custom-input-number"
          value={number}
          onChange={(e) => handleNumberChange(e.target.valueAsNumber)}
        ></input>
        <button
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          onClick={() => handleNumberChange(number + 1)}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default NumberCounter;
