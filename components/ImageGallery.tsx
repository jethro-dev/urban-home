import { Variant } from "@prisma/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  variants: Variant[];
  selectedVariant: Variant;
}

const ImageGallery: React.FC<Props> = ({ variants, selectedVariant }) => {
  const [currentVariant, setCurrentVariant] =
    useState<Variant>(selectedVariant);
  useEffect(() => {
    setCurrentVariant(selectedVariant);
  }, [selectedVariant]);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="relative h-[400px] mb-4">
        <Image
          src={currentVariant.image}
          alt={currentVariant.name}
          fill={true}
          className="w-full h-full object-contain rounded shadow-md"
        />
      </div>

      <div className="flex gap-4 overflow-auto">
        {variants.map((variant, index) => (
          <div className="relative flex-1 aspect-square">
            <Image
              key={index}
              src={variant.image}
              alt={variant.name}
              fill={true}
              className={`object-cover cursor-pointer rounded-md ${
                currentVariant.id === variant.id
                  ? "shadow-md border-2 border-neutral-200"
                  : ""
              }`}
              onClick={() => setCurrentVariant(variant)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
