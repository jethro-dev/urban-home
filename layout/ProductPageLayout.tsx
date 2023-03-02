import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import BreadcrumbComponent from "@components/Breadcrumb";
import Image from "next/image";
import CategoryFilterLayout from "./CategoryFilterLayout";

type Props = {
  children: React.ReactNode;
};

const ProductPageLayout = ({ children }: Props) => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSortingDropdownOpen, setIsSortingDropdownOpen] = useState(false);
  const { pathname, query } = useRouter();
  const { sort } = query || "";

  console.log(sort);
  return (
    <div className="ring-2">
      <div className="relative h-[400px] bg-fixed bg-bottom bg-cover bg-[url('/images/banner-1.jpg')]"></div>
      <div className="max-w-7xl mx-auto sm:px-6 px-2">
        {/* <BreadcrumbComponent /> */}

        <CategoryFilterLayout>{children}</CategoryFilterLayout>
      </div>
    </div>
  );
};

export default ProductPageLayout;
