import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const ProductNotFound = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto overflow-y-hidden">
      <div className="min-h-[800px] h-[calc(100vh-74px)] py-4 lg:py-6">
        <div className="flex flex-col items-center">
          <h1 className="font-medium text-2xl">Not Found</h1>
          <hr className="border-neutral-700 my-10 w-[90%]" />
          <Image src={"/images/404.svg"} alt="404" height={300} width={600} />
          <h1 className="mt-10 font-medium text-lg">
            Oops, sorry. This page can&apos;t be found
          </h1>
          <p className="mt-2 font-medium text-base">
            You may go back to products by clicking{" "}
            <Link href="/products" className="text-violet-500 hover:underline">
              here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductNotFound;
