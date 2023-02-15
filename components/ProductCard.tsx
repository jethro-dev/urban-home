import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductList from "./ProductList";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="rounded overflow-hidden ring-1 ring-neutral-600 shadow-md hover:ring-neutral-500 transition-all group relative">
      <div className="relative h-[400px]">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={`${
              product.images.length != 0
                ? product.images[0]
                : "/images/rick.svg"
            }`}
            alt={product.name}
            fill={true}
            className="object-cover ring-2"
          />
        </Link>
      </div>
      <hr className="border-1 border-neutral-600 mx-4" />
      <div className="flex items-center justify-between px-4 h-20">
        <div className="flex flex-col">
          <span className="font-semibold">{product.name}</span>
          {/* <span className="font-light text-sm">{product.categories[0]}</span> */}
        </div>
        <div>
          <span>${product.price}</span>
        </div>
      </div>
      {/* overlay */}
      <div className="absolute bottom-0 bg-neutral-600 w-full flex invisible group-hover:visible items-center justify-between px-4 h-[84px] gap-2 translate-y-[200px] group-hover:translate-y-0 transition-all">
        <button className="bg-violet-600 hover:bg-violet-700 px-4 py-4 rounded flex-[3] transition-colors duration-300">
          Add to Cart
        </button>
        <Link
          className="bg-neutral-800 hover:bg-violet-600 px-4 py-4 rounded flex-[2] transition-colors duration-300 grid place-items-center"
          href={`/products/${product.id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
