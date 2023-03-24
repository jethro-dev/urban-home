import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "typings";
import AddToCartBtn from "./AddToCartBtn";
import FavouriteBtn from "./FavouriteBtn";

type Props = {
  // [FIXME] fix type
  products: Product[];
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1536 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
  },
};

const ProductCarousel = ({ products }: Props) => {
  return (
    <div className="bg-neutral-200 rounded-md shadow-md p-6">
      <h3 className="text-2xl mb-6 font-semibold">Related products</h3>
      <Carousel
        responsive={responsive}
        infinite
        // autoPlay={true}
        // autoPlaySpeed={3000}
        itemClass="px-3"
        // arrows={false}
        // partialVisible={true}
        containerClass={"carousel"}
        // centerMode={true}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className=" rounded-md relative h-[400px] bg-white overflow-hidden"
          >
            <div className="w-full absolute z-20 bottom-0 p-4 flex justify-between items-center">
              {/* left */}
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="font-semibold text-sm">${product.price}</p>
              </div>
              {/* right */}
              <div className="flex gap-2">
                <AddToCartBtn
                  product={product}
                  variant={product.variants[0]}
                  quantity={1}
                />
                <FavouriteBtn />
              </div>
            </div>
            <Image
              src={`${product.variants[0].image}`}
              alt={product.name}
              fill={true}
              className="object-contain p-2"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
