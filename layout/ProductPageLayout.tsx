import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import BreadcrumbComponent from "@components/Breadcrumb";
import Image from "next/image";

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
      <div className="max-w-7xl mx-auto px-6">
        <BreadcrumbComponent />
        <div className="ring-2 grid items-start grid-cols-1 lg:grid-cols-12 gap-5 mb-20 relative">
          {/* left */}
          <div className="col-span-3 order-1 lg:order-none z-50">
            <div className="relative">
              {/* dropdown (for mobile) */}
              <div className="lg:hidden">
                <span className="rounded-md shadow-sm">
                  <button
                    type="button"
                    className="flex justify-between w-full rounded-sm border border-neutral-800 px-4 py-3 bg-accent-0 text-sm leading-5 font-medium focus:outline-none  focus:shadow-outline-normal transition ease-in-out duration-150 focus:ring-1 focus:ring-neutral-800"
                    onClick={() =>
                      setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                    }
                  >
                    All Categories
                    <span>drop</span>
                  </button>
                </span>
              </div>
              {/* menu (all category/new arrivals/featured) */}
              <div
                className={`absolute w-full ring-1 ring-neutral-800 lg:ring-0 mt-2 lg:mt-0 rounded shadow lg:block ${
                  !isCategoryDropdownOpen && "hidden"
                }`}
              >
                <ul className="">
                  <Link href={"/products"}>
                    <li
                      className={`px-4 py-3 hover:bg-neutral-900 cursor-pointer transition-all text-sm leading-5 font-medium text-neutral-400 ${
                        pathname === "/products" ? "underline" : ""
                      }`}
                    >
                      All Categories
                    </li>
                  </Link>
                  <Link href={"/products/new-arrivals"}>
                    <li
                      className={`px-4 py-3 hover:bg-neutral-900 cursor-pointer transition-all text-sm leading-5 font-medium text-neutral-400 ${
                        pathname === "/products/new-arrivals" ? "underline" : ""
                      }`}
                    >
                      New Arrivals
                    </li>
                  </Link>
                  <Link href={"/products/featured"}>
                    <li
                      className={`px-4 py-3 hover:bg-neutral-900 cursor-pointer transition-all text-sm leading-5 font-medium text-neutral-400 ${
                        pathname === "/products/featured" ? "underline" : ""
                      }`}
                    >
                      Featured
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          {/* middle */}
          <div className="ring-2 col-span-9 order-3 lg:order-none min-h-[500px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageLayout;
