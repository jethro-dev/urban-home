import { ReactElement, useState } from "react";
import ProductList from "@components/ProductList";
import { prisma } from "@lib/prisma";
import { GetServerSideProps } from "next";
import React from "react";
import Link from "next/link";
import { NextPageWithLayout } from "pages/_app";
import BannerLayout from "@layout/BannerLayout";
import Layout from "@layout/Layout";
import { useRouter } from "next/router";
import SortDropdown from "@components/SortDropdown";
import CategoryDropdown from "@components/CategoryDropdown";
import { Category } from "@prisma/client";
import { Product } from "typings";

type Props = {
  products: Product[];
  categories: Category[];
};

const sortProducts = (sort: string, products: Product[]): Product[] => {
  switch (sort) {
    case "PRICE_LOW_TO_HIGH":
      products.sort((a, b) => {
        return a.price - b.price;
      });
      break;
    case "PRICE_HIGH_TO_LOW":
      products.sort((a, b) => {
        return b.price - a.price;
      });
      break;
    case "NAME_ASC":
      products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      break;
    case "NAME_DESC":
      products.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
      break;
    case "LATEST":
      products.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
      break;
    case "BEST_MATCH":
      products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      break;
    default:
      products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      break;
  }
  return products;
};

const checkIfCategory = (product: Product, filter: string) => {
  let isFound = false;
  console.log({ product });
  for (let i = 0; i < product.category.length; i++) {
    if (product.category[i].slug === filter) {
      isFound = true;
      break;
    }
  }

  return isFound;
};

const filterProducts = (filter: string, products: Product[]) => {
  if (filter === null || filter === "" || filter === undefined) {
    return products;
  }

  return products.filter((product) => {
    return checkIfCategory(product, filter);
  });
};

const queryProducts = (q: string, products: Product[]) => {
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(q.toLowerCase()) ||
      product.category.some((category) =>
        category.name.toLowerCase().includes(q.toLowerCase())
      )
  );
};

const ProductPage = ({ products, categories }: Props) => {
  const router = useRouter();
  const { q, sort, filter } = router.query;

  if (filter) products = filterProducts(filter as string, products);

  if (sort) {
    products = sortProducts(sort as string, products);
  } else {
    sortProducts("BEST_MATCH", products);
  }

  if (q) products = queryProducts(q as string, products);

  console.log(products);
  return (
    <>
      <div className="bg-white divide-y py-4 md:py-6 lg:py-8">
        {/* upper */}
        <div className="pb-4 md:pb-6 lg:pb-8 space-x-3">
          <SortDropdown />
          <CategoryDropdown categories={categories} />
        </div>
        {/* lower */}
        <div className="pt-4 md:pt-6 lg:pt-8">
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
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

  const categories = await prisma.category.findMany({});

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BannerLayout>{page}</BannerLayout>
    </Layout>
  );
};

export default ProductPage;
