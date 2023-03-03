import ProductNotFound from "@components/ProductNotFound";
import Layout from "@layout/Layout";
import { prisma } from "@lib/prisma";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import Rating from "@components/Rating";
import ColorPicker from "@components/ColorPicker";
import NumberCounter from "@components/NumberCounter";
import AddToCartBtn from "@components/AddToCartBtn";
import FavouriteBtn from "@components/FavouriteBtn";
import Accordion from "@components/Accordion";
import ImageGallery from "@components/ImageGallery";
import ProductOverviewLayout from "@layout/ProductOverviewLayout";
import { Product, ShoppingCartState } from "typings";
import {
  Category,
  Collection,
  Product as ProductType,
  Variant,
} from "@prisma/client";
import { nanoid } from "nanoid";
import ProductCarousel from "@components/ProductCarousel";
import QuantityCounter from "@components/QuantityCounter";

type Props = {
  product: Product;
  relatedProducts: Product[];
};

const ProductPage = ({ product, relatedProducts }: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [variant, setVariant] = useState<Variant | null>(product?.variants[0]);

  if (!product) return <ProductNotFound />;

  const handleNumberChange = (value: number) => {
    setQuantity(value);
  };

  const handleVariantChange = (variant: Variant) => {
    setVariant(variant);
  };

  console.log({ relatedProducts });

  return (
    <div className="max-w-7xl mx-auto mt-4 lg:mt-6 px-4 lg:px-6">
      <div className="w-full relative gap-4 lg:gap-8 grid grid-cols-12 mb-6">
        {/* left */}
        <div className="col-span-12 md:col-span-7 lg:col-span-8 sticky lg:top-[130px] w-full">
          <div className="mb-14">
            <ImageGallery
              variants={product.variants}
              selectedVariant={variant!}
            />
          </div>

          <p className="mb-10 text-xl font-medium text-neutral-700">
            {product.description}
          </p>

          <div className="mb-10">
            <Accordion />
          </div>

          <div className="hidden md:block">
            <ProductCarousel products={relatedProducts} />
          </div>
        </div>
        {/* right */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <div className="ring-1 ring-neutral-200 p-6 shadow-md rounded-md  sticky top-[98px]">
            <h1 className="mb-1 text-xl font-semibold">{product.name}</h1>
            <p className="mb-4 text-lg font-medium">${product.price}</p>
            <Rating value={4} className="mb-4" />
            <ColorPicker
              className="mb-4"
              variants={product.variants}
              onVariantChange={handleVariantChange}
            />

            <div className="flex gap-4 items-center">
              <NumberCounter onNumberChange={handleNumberChange} />

              <AddToCartBtn
                product={product}
                variant={variant!}
                quantity={quantity}
              />
              <div className="absolute top-0 right-0 p-4">
                <FavouriteBtn />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: You might also like, reviews */}
      <div className="block md:hidden mb-6">
        <ProductCarousel products={relatedProducts} />
      </div>

      <div className="mb-6">
        <ProductCarousel products={relatedProducts} />
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
      slug: params?.id as string,
    },
    include: {
      variants: true,
      collection: true,
      category: true,
      color: true,
    },
  });

  const relatedProducts = await prisma.product.findMany({
    where: {
      OR: product?.category.map((category: Category) => ({
        category: {
          some: {
            id: category.id,
          },
        },
      })),

      id: {
        not: {
          equals: product?.id,
        },
      },
    },
    include: {
      variants: true,
      collection: true,
      category: true,
      color: true,
    },
    take: 10,
  });

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      relatedProducts: JSON.parse(JSON.stringify(relatedProducts)),
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
