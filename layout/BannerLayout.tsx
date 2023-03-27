import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import BreadcrumbComponent from "@components/Breadcrumb";
import Image from "next/image";
import Footer from "@components/Footer";

type Props = {
  children: React.ReactNode;
};

const BannerLayout = ({ children }: Props) => {
  return (
    <div className="">
      <div className="relative h-[200px] bg-fixed bg-bottom bg-cover bg-[url('/images/banner-1.jpg')]"></div>
      <div className="max-w-7xl mx-auto sm:px-6 px-4">
        {/* <BreadcrumbComponent /> */}

        {children}
      </div>
      <Footer />
    </div>
  );
};

export default BannerLayout;
