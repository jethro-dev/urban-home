import React from "react";
import { Product } from "../../../typings";
import { notFound } from "next/navigation";
import data from "../../../utils/data";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

const fetchProductById = async (id: string) => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
  //   next: { revalidate: 60 },
  // });
  // const product: Product = await res.json();

  const product = data.products.find((product) => product.id.toString() === id);

  return product;
};

const ProductPage = async ({ params }: Props) => {
  const product = await fetchProductById(params.id);

  if (!product?.id) return notFound();

  return (
    <div className="h-[900px] flex flex-col items-start gap-4">
      <Link
        href="/products"
        className="bg-neutral-800 text-neutral-300 px-4 py-2 rounded"
      >
        Back to Products
      </Link>

      <div className="w-full flex-1 flex items-stretch">
        {/* left */}
        <div className="flex-1 grid place-items-center ">
          <Image
            src={`/images/${product.img}`}
            alt={product.title}
            width={400}
            height={400}
            className="p-20 bg-neutral-900 rounded shadow-lg"
          />
        </div>
        {/* right */}
        <div className="flex-1 px-4">
          <h1 className="mb-2">Product: {product.title}</h1>
          <p className="mb-2">Description: {product.description}</p>
          <p className="mb-4"> Price: {product.price}</p>

          <div className="flex h-10 gap-2 mb-2">
            <button className="w-10 bg-white text-black rounded text-xl font-semibold">
              -
            </button>
            <span className="rounded bg-white px-4 grid place-items-center">
              1
            </span>
            <button className="w-10 bg-white text-black rounded text-xl font-semibold">
              +
            </button>
          </div>

          <button className="bg-neutral-500 p-4 rounded">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const products: Product[] = await res.json();

  const trimmedProducts = products.splice(0, 10);

  return trimmedProducts.map((product) => ({
    id: product.id.toString(),
  }));
}
