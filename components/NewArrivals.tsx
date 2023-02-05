import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const data = {
  img: "banner-1.jpg",
  title: "Spring Collection is here",
  description:
    "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you.",
};

const NewArrivals = (props: Props) => {
  return (
    <div className="relative h-[400px] shadow-md">
      <Image
        src="/images/new-arrivals-banner.jpg"
        alt="New arrivals"
        fill={true}
        className="object-cover object-center rounded-md brightness-75"
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white text-center">
        <h1 className="text-xl lg:text-3xl font-semibold mb-4">{data.title}</h1>
        <p className="text-xs lg:text-sm font-thin mb-4">{data.description}</p>
        <Link
          href={"/products/new-arrivals"}
          className="bg-neutral-300 bg-opacity-20 ring-neutral-400 px-5 py-2.5 rounded ring-1 text-xs lg:text-sm font-semibold inline-block hover:bg-opacity-30 transition-all"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default NewArrivals;
