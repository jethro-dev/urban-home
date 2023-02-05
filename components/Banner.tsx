import { Button, Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { Banner } from "typings";

type Props = {
  banners: Banner[];
};

const Banner = ({ banners }: Props) => {
  return (
    <div className="h-[800px]">
      <Carousel
        slideInterval={10000}
        indicators={false}
        className="[&>*]:rounded-t-none"
      >
        {banners.map((banner) => (
          <div className="h-full">
            <Image
              src={`/images/${banner.img}`}
              alt="..."
              className="object-cover object-center brightness-50"
              fill={true}
            />
            <div className="text-white text-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h1 className="text-2xl lg:text-4xl font-bold mb-4">
                {banner.title}
              </h1>
              <p className="text-xs lg:text-sm font-thin mb-4">
                {banner.description}
              </p>
              <button className="bg-neutral-300 bg-opacity-20 ring-neutral-400 px-5 py-2.5 rounded ring-1 text-xs lg:text-sm font-semibold hover:bg-opacity-30 transition-all">
                Explore
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
