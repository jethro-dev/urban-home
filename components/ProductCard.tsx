import React from "react";
import ProductList from "./ProductList";

type Props = {};

const ProductsPage = (props: Props) => {
  return (
    <div className="mx-auto max-w-7xl px-6 w-full">
      <div className="grid items-start grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20 relative">
        {/* left */}
        <div className="col-span-8 lg:col-span-2 order-1 lg:order-none sticky top-[96px]">
          <div className="origin-top-left absolute lg:relative left-0 mt-2 w-full rounded-md shadow-lg lg:shadow-none z-10 mb-10 lg:block hidden ring-2">
            <h3>All Categories</h3>
            <span>New Arrivals</span>
            <span>Featured</span>
          </div>

          <div>
            <h3>All Designers</h3>
            <span>New Arrivals</span>
            <span>Featured</span>
          </div>
        </div>

        {/* middle */}
        <div className="col-span-8 order-3 lg:order-none">
          {/* @ts-expect-error Server Component */}
          <ProductList />
        </div>

        {/* right */}
        <div className="col-span-8 lg:col-span-2 order-2 lg:order-none sticky top-[96px]">
          <h3>Relevance</h3>
          <span>Trending</span>
          <span>Latest Arrivals</span>
          <span>Price: Low to High</span>
          <span>Price: High to Low</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
