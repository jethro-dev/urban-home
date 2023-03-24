import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "@components/ProductCard";
import { prisma } from "@lib/prisma";
import { Product } from "typings";

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => {
  if (products.length < 1) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
        Hello, sorry we couln't find the product you are looking for...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
