import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "@layout/Layout";
import { ReactElement, useState, useEffect } from "react";
import useWindowDimensions from "hooks/useWindowDimensions";
import next, { GetStaticProps } from "next";
import { prisma } from "@lib/prisma";
import { Banner as BannerType } from "typings";
import Link from "next/link";
import Banner from "@components/Banner";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ShopByCategory from "@components/ShopByCategory";
import NewArrivals from "@components/NewArrivals";
import ShopByCollection from "@components/ShopByCollection";
import { Category, Collection, Product } from "@prisma/client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "@components/Footer";

type Props = {
  categories: Category[];
  collection: Collection[];
};

const inter = Inter({ subsets: ["latin"] });

const banners: BannerType[] = [
  {
    img: "banner-1.jpg",
    title: "Spring Collection is here",
    description:
      "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you.",
  },
  {
    img: "banner-2.jpg",
    title: "Autumn Collection is here",
    description:
      "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you.",
  },
];

export default function Home({ categories, collection }: Props) {
  return (
    <>
      <Head>
        <title>Urban Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* home page wrapper */}
      <div>
        {/* banner/hero */}
        <Banner banners={banners} />
        <div className="max-w-7xl mx-auto py-10 flex flex-col gap-10 md:gap-16 lg:gap-20 px-6">
          {/* Shop by Category */}
          <ShopByCategory categories={categories} />
          {/* New arrivals */}
          <NewArrivals />
          {/* ShopByCollection */}
          {/* <ShopByCollection /> */}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const categories = await prisma.category.findMany({
    take: 10,
  });

  const collection = await prisma.collection.findMany({
    take: 10,
  });

  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
      collection: JSON.parse(JSON.stringify(collection)),
    }, // will be passed to the page component as props
  };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
