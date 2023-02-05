import React, { useState } from "react";
import { Color } from "typings";

interface color {
  name: string;
  hexCode: string;
}

type Props = {
  colors: Color[];
  className?: string;
};

const ColorPicker = ({ colors, className }: Props) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  return (
    <div className={`${className ? className : ""}`}>
      <h3 className="font-semibold text-sm mb-2">Color</h3>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            className={`rounded-full h-6 w-6 ${
              selectedColor.name == color.name ? "ring-2 ring-white" : ""
            }`}
            style={{ backgroundColor: color.hexCode }}
            onClick={() => setSelectedColor(color)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
