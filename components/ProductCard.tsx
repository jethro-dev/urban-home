import { Collection, Product as ProductType } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "typings";
import AddToCartBtn from "./AddToCartBtn";
import FavouriteBtn from "./FavouriteBtn";
import ProductList from "./ProductList";
import Rating from "./Rating";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-white overflow-hidden transition-all group relative p-4 flex flex-col gap-2 ring-1 ring-neutral-200 shadow-md rounded-md">
      <div className="relative aspect-square">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={`${product.variants[0].image}`}
            alt={product.name}
            fill={true}
            className="object-contain"
          />
        </Link>
      </div>

      <div>
        <h3 className="font-semibold">{product.name}</h3>
        <h3 className="font-light text-sm">Armchair</h3>
      </div>

      <div className="">
        <h3>${product.price}</h3>
      </div>

      <Rating value={4} />

      <div className="flex items-start gap-2">
        <AddToCartBtn
          product={product}
          variant={product.variants[0]}
          quantity={1}
        />
        <FavouriteBtn />
      </div>
    </div>
  );
};

export default ProductCard;
