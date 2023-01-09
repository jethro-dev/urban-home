import Link from "next/link";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-black sticky top-0 z-[9999]">
      {/* wrapper */}
      <div className="mx-auto max-w-8xl px-6">
        {/* upper */}
        <div className="h-[74px] flex justify-between py-4">
          {/* left */}
          <div className="flex items-center flex-1">
            <Link aria-label="Logo" href="/">
              logo
            </Link>
            <nav className="lg:flex gap-6 ml-6 hidden">
              <Link href="/products">All Products</Link>
              <Link href="/products">New Arrivals</Link>
              <Link href="/products">Featured</Link>
            </nav>
          </div>
          {/* middle */}
          <div className="justify-center flex-1 lg:flex relative hidden">
            <div className="w-full">
              <label className="hidden" htmlFor="search">
                Search
              </label>
              <input
                id="search"
                className="w-full h-full bg-transparent text-neutral-200 placeholder:text-neutral-700 pr-10 py-2 pl-3 ring-1 focus:ring-2 ring-neutral-800 focus:ring-neutral-700 focus:outline-none text-sm"
                placeholder="Search for products..."
              />
              <div className="grid place-items-center absolute right-0 bottom-0 top-0 mr-3">
                <AiOutlineSearch size={24} />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex items-center justify-end flex-1">
            <nav>
              <ul className="flex gap-6">
                <li className="grid place-items-center">
                  <button aria-label="Cart items: 0">
                    <FiShoppingBag
                      size={28}
                      className="hover:scale-105 transition-all"
                    />
                  </button>
                </li>
                <li className="grid place-items-center">
                  <button className="hover:ring-2 hover:scale-105 ring-white rounded-full overflow-hidden transition-all">
                    <div className="bg-red-500 w-[28px] h-[28px]"></div>
                  </button>
                </li>
                <li className="md:hidden grid place-items-center">
                  <button data-variant="naked" aria-label="Menu">
                    <HiMenuAlt3 size={28} />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* lower (only show in mobile) */}
        <div className="flex pb-4 lg:px-6 lg:hidden">
          <div className="Searchbar_root__i4oSJ">
            <label className="hidden" htmlFor="mobile-search">
              Search
            </label>
            <input type="text" />
            <div className="Searchbar_iconContainer__1Tln2">
              <span>Q</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
