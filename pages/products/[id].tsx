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
          <div className="col-span-12 md:col-span-7 overflow-auto sticky lg:top-[130px] w-full">
            <ImageGallery
              variants={product.variants}
              selectedVariant={variant}
            />
          </div>
          {/* right */}
          <div className="col-span-12 md:col-span-5">
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
