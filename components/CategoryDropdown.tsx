import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { Island_Moments } from "@next/font/google";
import { Category } from "@prisma/client";

type Props = {
  categories: Category[];
};

const CategoryDropdown = ({ categories }: Props) => {
  const router = useRouter();
  const oldQuery = router.query;

  const handleFilter = (filter: string) => {
    if (filter === "" || null || undefined) {
      delete oldQuery["filter"];
      router.push(
        {
          pathname: router.pathname,
          query: { ...oldQuery },
        },
        undefined,
        {
          shallow: true,
        }
      );
    } else {
      router.push(
        {
          pathname: router.pathname,
          query: { ...oldQuery, filter },
        },
        undefined,
        {
          shallow: true,
        }
      );
    }
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-full bg-neutral-200 hover:bg-neutral-300 bg-opacity-75 transition-all outline-none border-none text-black px-4 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Category
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-black"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-2 space-y-2">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => handleFilter("")}
                >
                  All
                </button>
              )}
            </Menu.Item>
            {categories.map((category) => (
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => handleFilter(category.slug)}
                  >
                    {category.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CategoryDropdown;
