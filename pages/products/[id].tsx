import ProductNotFound from "@components/ProductNotFound";
import Layout from "@layout/Layout";
import { prisma } from "@lib/prisma";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
import { Product } from "typings";
import Breadcrumb from "@components/Breadcrumb";
import Rating from "@components/Rating";
import ColorPicker from "@components/ColorPicker";
import NumberCounter from "@components/NumberCounter";
import AddToCartBtn from "@components/AddToCartBtn";
import FavouriteBtn from "@components/FavouriteBtn";
import Accordion from "@components/Accordion";
import ImageGallery from "@components/ImageGallery";
import ProductOverviewLayout from "@layout/ProductOverviewLayout";
type Props = {
  product: Product;
};

const colors = [
  { name: "Green", hexCode: "#00ff00" },
  { name: "Red", hexCode: "#ff0000" },
  { name: "Blue", hexCode: "#0000ff" },
];

const images = [
  {
    src: "/images/rick.svg",
    alt: "Rick",
  },
  {
    src: "/images/morty.svg",
    alt: "Morty",
  },
  {
    src: "/images/brave.svg",
    alt: "Brave",
  },
  {
    src: "/images/batman.svg",
    alt: "Batman",
  },
];

const ProductPage = ({ product }: Props) => {
  if (!product) return <ProductNotFound />;

  return (
    <div className="max-w-7xl mx-auto mt-4 lg:mt-6 px-4 lg:px-6">
      <div className="min-h-[500px] flex flex-col items-start gap-4 mb-4">
        <div className="w-full flex-1 flex items-start relative flex-col gap-4 lg:gap-8 lg:flex-row">
          {/* left */}
          <div className="flex-1 overflow-auto sticky lg:top-[130px] w-full">
            <ImageGallery images={images} />
          </div>
          {/* right */}
          <div className="flex-1">
            <h1 className="mb-1 text-xl font-semibold">{product.name}</h1>
            <p className="mb-4 text-lg font-medium">${product.price}</p>
            <Rating value={4} className="mb-4" />
            <p className="mb-4 text-base font-light">{product.description}</p>
            <ColorPicker colors={colors} className="mb-4" />
            <NumberCounter className="mb-4" />

            <div className="flex items-start gap-1 mb-4">
              <AddToCartBtn item={{ id: 1, product: product, quantity: 2 }} />
              <FavouriteBtn />
            </div>

            <Accordion />
          </div>
        </div>
      </div>

      <div className="h-[600px]">
        TODO: features, reviews,recently viewed, recommand,
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  product: Product;
}> = async ({ params }) => {
  // console.log(params.id);

  const product = await prisma.product.findUnique({
    where: {
      id: params?.id as string,
    },
  });

  console.log(product);

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ProductOverviewLayout>{page}</ProductOverviewLayout>
    </Layout>
  );
};

export default ProductPage;
