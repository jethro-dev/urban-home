import Layout from "@layout/Layout";
import ProductList from "@components/ProductList";
import ProductPageLayout from "layout/ProductPageLayout";
import { prisma } from "@lib/prisma";
import { GetServerSideProps } from "next";
import React, { ReactElement } from "react";
import { Product } from "typings";

type Props = {
  products: Product[];
};

const NewArrivalsPage = ({ products }: Props) => {
  return <ProductList products={products} />;
};

export const getServerSideProps: GetServerSideProps<{
  products: Product[];
}> = async () => {
  const products = await prisma.product.findMany({
    orderBy: [
      {
        createdBy: "desc",
      },
    ],
  });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};

NewArrivalsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ProductPageLayout>{page}</ProductPageLayout>
    </Layout>
  );
};

export default NewArrivalsPage;
