import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "../../typings";
import data from "../../utils/data";
import ProductCard from "./ProductCard";

type Props = {};

const fetchProducts = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  // const products: Product[] = await res.json();

  return data.products;
};

const ProductList = async (props: Props) => {
  const products = await fetchProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
