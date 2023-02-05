import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

type Props = {};

const ShopByCollection = (props: Props) => {
  const collection = [
    { name: "Sofas", img: "sofa.jpg", slug: "sofas" },
    {
      name: "Chairs",
      img: "chairs.jpg",
      slug: "chairs",
    },
    {
      name: "Home care",
      img: "home-care.jpg",
      slug: "home-care",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-2xl font-semibold">Shop by Collection</h3>
        <button className="flex items-center gap-1 text-sm font-semibold hover:bg-neutral-200 px-4 py-2 rounded-full transition-all hover:underline">
          Browse all collection{" "}
          <HiArrowNarrowRight className="mt-[1px]" size={22} />
        </button>
      </div>
      {/* GRID */}
      {/* [FIXME] sometimes this trigger hydration error*/}
      <div className="h-[800px] grid grid-cols-1 md:grid-cols-2 [&>*]:rounded-md gap-6">
        {collection.map((item, i) => (
          <Link
            href={`/categories/${item.slug}`}
            className={`shadow-md overflow-hidden relative hover:scale-[1.01] transition-all ${
              i == 0 ? "md:row-span-2" : ""
            }`}
          >
            <Image
              src={`/images/${item.img}`}
              alt={item.name}
              fill={true}
              className={`object-cover object-center brightness-75`}
            />
            <div className="absolute bottom-0 text-white left-0 mb-6 ml-6">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <Link
                href={`/categories/${item.slug}`}
                className="flex items-center gap-1 font-medium text-sm"
              >
                Shop
                <HiArrowNarrowRight size={22} className="mt-[1px]" />
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByCollection;
