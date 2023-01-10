"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineLink } from "react-icons/ai";
type Props = {};

const LoginForm = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`${
        isOpen ? "grid" : "hidden"
      } absolute top-0 bottom-0 left-0 right-0 h-[100vh] bg-black bg-opacity-80 place-items-center z-[99] p-12`}
    >
      <div className="p-12 bg-black border border-neutral-700 relative">
        <div
          className="w-80
        "
        >
          {/* close btn */}
          <button
            aria-label="Close panel"
            className="absolute top-0 right-0 m-6"
            onClick={() => setIsOpen(false)}
          >
            <IoCloseOutline
              size={24}
              className="hover:neutral-500 hover:scale-110 cursor-pointer transition-all"
            />
          </button>

          {/* logo div */}
          <div className="grid place-items-center pb-10 select-none">
            <Image
              src={"/logo.svg"}
              alt=""
              width={70}
              height={70}
              draggable="false"
            />
          </div>

          {/* input div */}
          <div className="flex flex-col space-y-4">
            <label>
              <input
                className="w-full bg-black ring-1 ring-neutral-700 px-3 py-2 outline-none focus:ring-neutral-600 focus:ring-2"
                type="email"
                placeholder="Email"
              />
            </label>
            <label>
              <input
                className="w-full bg-black ring-1 ring-neutral-700 px-3 py-2 outline-none focus:ring-neutral-600 focus:ring-2"
                type="password"
                placeholder="Password"
              />
            </label>
            <button
              data-variant="slim"
              className="w-full bg-white text-black px-3 py-2 rounded font-semibold"
              type="submit"
            >
              Log In
            </button>
            {/* OR divider */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-neutral-600"></div>
              <span className="flex-shrink mx-4 text-neutral-700 font-semibold">
                OR
              </span>
              <div className="flex-grow border-t border-neutral-600"></div>
            </div>

            {/* magic link */}
            <button
              data-variant="slim"
              className="w-full bg-white text-black px-3 py-2 rounded font-semibold"
              type="submit"
            >
              <span className="flex justify-center items-center gap-1">
                Log in with magic link <AiOutlineLink size={22} />
              </span>
            </button>

            {/* sign up */}
            <div className="pt-1 text-center text-sm">
              <span className="text-accent-7">Don't have an account?</span>{" "}
              <a className="text-accent-9 font-bold hover:underline cursor-pointer">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
