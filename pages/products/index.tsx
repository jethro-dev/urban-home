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

const ProductPage = ({ products, categories }: Props) => {
  const router = useRouter();
  const { sort, filter } = router.query;
  console.log(sort);
  console.log({ filter });

  products = filterProducts(filter as string, products);
  products = sortProducts((sort as string) || "NAME_ASC", products);

  console.log(products);
  return (
    <div className="bg-white divide-y py-4 md:py-6 lg:py-8">
      {/* upper */}
      <div className="pb-4 md:pb-6 lg:pb-8 space-x-3">
        {/* [FIXME] Dropdown components give useReducer error on reload */}
        <SortDropdown />
        <CategoryDropdown categories={categories} />
        {/* <Dropdown title="Color" />
    <Dropdown title="Category" />
    <Dropdown title="Collection" /> */}
      </div>
      {/* lower */}
      <div className="pt-4 md:pt-6 lg:pt-8">
        <ProductList products={products} />
      </div>
    </div>
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
