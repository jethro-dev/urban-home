import { Variant } from "@prisma/client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  className?: string;
  variants: Variant[];
  onVariantChange: Function;
};

const ColorPicker = ({ className, variants, onVariantChange }: Props) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(variants[0]);

  const handleVariantChange = (variant: Variant) => {
    onVariantChange(variant);
    setSelectedVariant(variant);
  };

  return (
    <div className={`${className ? className : ""}`}>
      <h3 className="font-semibold text-base mb-2">Variants</h3>
      <p className="font-normal text-sm mb-2">{selectedVariant.name}</p>
      <div className="flex gap-2">
        {variants.map((variant) => (
          <div
            key={variant.id}
            className="relative h-20 w-20 rounded-md hover:ring-1 ring-neutral-300 overflow-hidden transition-all cursor-pointer"
            onClick={() => handleVariantChange(variant)}
          >
            <Image
              src={variant.image}
              alt={variant.name}
              fill={true}
              className="p-2"
            />
          </div>
          // <button
          //   key={idx}
          //   className={`rounded-full h-6 w-6 ${
          //     selectedColor.name == color.name ? "ring-2 ring-white" : ""
          //   }`}
          //   style={{ backgroundColor: color.hexCode }}
          //   onClick={() => setSelectedColor(color)}
          // ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
