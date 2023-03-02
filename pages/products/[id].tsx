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
import { ShoppingCartState } from "typings";
import {
  Category,
  Collection,
  Product as ProductType,
  Variant,
} from "@prisma/client";
import { nanoid } from "nanoid";

type Props = {
  product: Product;
};

interface Product extends ProductType {
  categories: Category[];
  collection: Collection[];
  variants: Variant[];
}

const ProductPage = ({ product }: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [variant, setVariant] = useState<Variant>(product.variants[0]);

  if (!product) return <ProductNotFound />;

  const handleNumberChange = (value: number) => {
    setQuantity(value);
  };

  const handleVariantChange = (variant: Variant) => {
    setVariant(variant);
  };

  console.log({ quantity, variant });

  return (
    <div className="max-w-7xl mx-auto mt-4 lg:mt-6 px-4 lg:px-6">
      <div className="min-h-[500px] flex flex-col items-start gap-4 mb-4">
        <div className="w-full flex-1 relative gap-4 lg:gap-8 grid grid-cols-12">
          {/* left */}
          <div className="col-span-12 md:col-span-7 sticky lg:top-[130px] w-full">
            <ImageGallery
              variants={product.variants}
              selectedVariant={variant}
            />

            <p className="mb-4">{product.description}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              placeat, minus in vel reiciendis suscipit eveniet aliquid minima
              quae dolore, reprehenderit tenetur nihil sed at recusandae quia
              unde veritatis voluptate ullam? Sapiente nostrum, ullam
              dignissimos qui tempora unde sint repellendus fugiat veniam
              explicabo dolore illum, facere ab nihil iure perspiciatis
              voluptate illo! Debitis molestias doloremque sequi repudiandae
              dolor nam optio nisi voluptates quod incidunt, molestiae qui.
              Culpa velit incidunt voluptas sed libero autem unde aliquam
              cumque, eos minima, corporis expedita non nisi saepe atque,
              officia sit molestiae accusantium. Praesentium nam impedit maxime
              itaque perspiciatis magnam. Illo earum nisi ratione cum numquam
              nostrum culpa odit molestias suscipit unde voluptates maiores
              praesentium rem eaque iure, nemo exercitationem officiis
              voluptatem deleniti tempora fuga autem assumenda ex! Itaque,
              veritatis omnis. Maiores minima optio aperiam autem obcaecati,
              temporibus quidem facilis sapiente quaerat asperiores est aliquid
              placeat, facere esse nam sequi alias distinctio soluta laboriosam
              unde eius. Possimus, hic consequuntur vero pariatur fuga quisquam
              assumenda ut at nostrum porro itaque aperiam beatae aliquam eaque
              sapiente laborum veniam dolorum ad deleniti suscipit rem officia,
              maiores iure facilis. Deleniti sed recusandae saepe reprehenderit
              possimus officia qui quo, odit, veritatis unde fuga consectetur,
              porro quod veniam voluptatem nemo earum.
            </p>
          </div>
          {/* right */}
          <div className="ring-2 col-span-12 md:col-span-5">
            <h1 className="mb-1 text-xl font-semibold">{product.name}</h1>
            <p className="mb-4 text-lg font-medium">${product.price}</p>
            <Rating value={4} className="mb-4" />
            <p className="mb-4 text-base font-light">{product.description}</p>
            <ColorPicker
              className="mb-4"
              variants={product.variants}
              onVariantChange={handleVariantChange}
            />
            <NumberCounter
              className="mb-4"
              onNumberChange={handleNumberChange}
            />

            <div className="flex items-start gap-1 mb-4">
              <AddToCartBtn
                product={product}
                variant={variant}
                quantity={quantity}
              />
              <FavouriteBtn />
            </div>

            <Accordion />
          </div>
        </div>
      </div>

      {/* TODO: features, reviews,recently viewed, recommand, */}
      <div className="h-[600px] ring-2">
        <h3>Related products</h3>
        <div></div>
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
