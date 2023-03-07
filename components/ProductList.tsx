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
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
