import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "flowbite-react";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Category } from "@prisma/client";
type Props = {
  categories: Category[];
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1536 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
  },
};

const categories: any = [
  { id: "1", name: "Furniture", slug: "category-1", img: "category-1.jpg" },
  { id: "2", name: "Decor", slug: "category-2", img: "category-2.jpg" },
  { id: "3", name: "Aromatherapy", slug: "category-3", img: "category-3.jpg" },
  { id: "4", name: "Chairs", slug: "category-4", img: "category-4.jpg" },
  { id: "5", name: "Bathroom", slug: "bathroom", img: "bathroom.jpg" },
  { id: "6", name: "Bedroom", slug: "bedroom", img: "bedroom.jpg" },
];

const ShopByCategory = ({}: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-xl lg:text-2xl font-semibold">Shop by Category</h3>
        <button className="flex items-center gap-1 text-xs lg:text-sm font-semibold hover:bg-neutral-200 px-4 py-2 rounded-full transition-all hover:underline">
          Browse all categories{" "}
          <HiArrowNarrowRight className="mt-[1px]" size={22} />
        </button>
      </div>
      <Carousel
        infinite
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        itemClass="px-3 h-[220px] md:h-[370px] lg:h-[400px]"
        // arrows={false}
        // partialVisible={true}
        containerClass={"carousel"}
        centerMode={true}
      >
        {categories.map((category) => (
          <Link href={`/categories/${category.slug}`}>
            <div className="h-full relative">
              <Image
                src={`/images/${category.img}`}
                alt={category.name}
                fill={true}
                className="object-cover object-center rounded-md brightness-50 hover:brightness-75 transition-all shadow-md"
              />
              <h3 className="absolute bottom-0 left-[50%] translate-x-[-50%] mb-4 text-sm md:text-lg lg:text-xl font-semibold text-white">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default ShopByCategory;
