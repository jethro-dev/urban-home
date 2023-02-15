"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineLink } from "react-icons/ai";
type Props = {
  toggleLoginForm: Function;
};

const LoginForm = ({ toggleLoginForm }: Props) => {
  return (
    <div
      className="w-80
        "
    >
      {/* close btn */}
      <button
        aria-label="Close panel"
        className="absolute top-0 right-0 m-4"
        onClick={() => toggleLoginForm()}
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
            className="text-sm font-normal w-full bg-white ring-1 ring-neutral-300 px-3 py-2 outline-none focus:ring-neutral-300 focus:ring-2 border-none rounded-md"
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
          <input
            className="text-sm font-normal w-full bg-white ring-1 ring-neutral-300 px-3 py-2 outline-none border-none focus:ring-neutral-300 focus:ring-2 rounded-md"
            type="password"
            placeholder="Password"
          />
        </label>
        <button
          data-variant="slim"
          className="w-full bg-violet-500 hover:bg-violet-600 transition-colors text-white px-3 py-2 rounded-md font-medium"
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
          className="w-full inline-block bg-white hover:bg-neutral-300 text-black py-2 font-semibold rounded-md transition-colors"
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
  );
};

export default LoginForm;
