import { ReactElement, useState } from "react";
import ProductList from "@components/ProductList";
import { prisma } from "@lib/prisma";
import { GetServerSideProps } from "next";
import React from "react";
import Link from "next/link";
import { NextPageWithLayout } from "pages/_app";
import ProductPageLayout from "@layout/ProductPageLayout";
import Layout from "@layout/Layout";
import { useRouter } from "next/router";
import { Product } from "@prisma/client";

type Props = {
  products: Product[];
};

const sortProducts = (sort: string, products: Product[]): Product[] => {
  switch (sort) {
    case "trending-desc":
      products.sort((a, b) => {
        return (
          new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
        );
      });
      break;
    case "latest-desc":
      products.sort((a, b) => {
        return (
          new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
        );
      });
      break;
    case "price-asc":
      products.sort((a, b) => {
        return a.price - b.price;
      });
      break;
    case "price-desc":
      products.sort((a, b) => {
        return b.price - a.price;
      });
      break;
  }
  return products;
};

const ProductPage = ({ products }: Props) => {
  const router = useRouter();
  const { sort, category } = router.query;
  console.log(sort);

  if (sort) {
    products = sortProducts(sort as string, products);
  }

  console.log(products);
  return <ProductList products={products} />;
};

export const getServerSideProps: GetServerSideProps<{
  products: Product[];
}> = async () => {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      collection: true,
      color: true,
      variants: true,
    },
  });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ProductPageLayout>{page}</ProductPageLayout>
    </Layout>
  );
};

export default ProductPage;
