import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "../typings";
import ProductCard from "@components/ProductCard";
import { prisma } from "@lib/prisma";

type Props = {};

const fetchProducts = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  // const products: Product[] = await res.json();
  const products: Product[] = await prisma.product.findMany({
    include: { categories: true },
  });
  return products;
};

const ProductList = async (props: Props) => {
  const products = await fetchProducts();

  console.log(products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  );
};

export default ProductList;
