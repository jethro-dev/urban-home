import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import BreadcrumbComponent from "@components/Breadcrumb";
import Image from "next/image";
import OrderSummary from "@components/OrderSummary";

type Props = {
  children: React.ReactNode;
};

const OrderSummaryLayout = ({ children }: Props) => {
  return (
    <div className="max-w-7xl mx-auto mt-4 lg:mt-6">
      <div className="w-full relative gap-4 grid grid-cols-12 mb-6">
        <div className="col-span-12 md:col-span-7 lg:col-span-8 w-full">
          {/* <CartDetail /> */}
          {children}
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col gap-4">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryLayout;
