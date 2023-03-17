"use client";

import { Dispatch, SetStateAction, useState, useRef } from "react";
import Image from "next/image";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import {
  AiOutlineGithub,
  AiOutlineGoogle,
  AiOutlineLink,
} from "react-icons/ai";
import { signIn } from "next-auth/react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
type Props = {
  toggleLoginForm: Function;
};

const LoginForm = ({ toggleLoginForm }: Props) => {
  const [email, setEmail] = useState<null | string>(null);
  const [isMagicLink, setIsMagicLink] = useState(false);

  const handleGoogleSignin = () => {
    signIn("google");
  };
  const handleGitHubSignin = () => {
    signIn("github");
  };
  const handlePasswordlessSignin = (e: any) => {
    if (!email) return false;

    signIn("email", { email, redirect: false });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email) return false;

    signIn("email", { email, redirect: false });
  };

  return (
    <form className="w-80">
      {/* close btn */}
      <button
        type="button"
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

      <div className="relative overflow-hidden">
        {/* translate here */}
        <div
          className={`flex gap-1 transition-all duration-300 ease-in-out ${
            isMagicLink ? "translate-x-[-100%]" : "translate-x-0"
          }`}
        >
          {/* first page */}
          <div className="w-full shrink-0 px-1">
            {/* input div */}
            <div className="flex flex-col space-y-2.5">
              <label>
                <input
                  className="text-sm font-normal w-full bg-white ring-inset ring-1 ring-neutral-300 px-3 py-2.5 outline-none focus:ring-inset focus:ring-neutral-300 focus:ring-2 border-none rounded-md"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                <input
                  className="text-sm font-normal w-full bg-white ring-1 ring-inset ring-neutral-300 px-3 py-2.5 outline-none border-none focus:ring-inset focus:ring-neutral-300 focus:ring-2 rounded-md"
                  type="password"
                  placeholder="Password"
                />
              </label>
              <button
                className="w-full bg-violet-500 hover:bg-violet-600 transition-colors text-white px-3 py-2 rounded-md font-medium"
                type="button"
                onClick={(e) => handlePasswordlessSignin(e)}
              >
                Sign In
              </button>
              {/* OR divider */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-neutral-600"></div>
                <span className="flex-shrink mx-4 text-black text-sm font-light">
                  or sign in with
                </span>
                <div className="flex-grow border-t border-neutral-600"></div>
              </div>

              {/* magic link */}
              <button
                className="w-full inline-block bg-white hover:bg-neutral-100 text-black py-2.5 font-semibold rounded-md transition-colors ring-1 ring-inset ring-neutral-200"
                type="button"
                onClick={() => setIsMagicLink((prev) => !prev)}
              >
                <span className="flex justify-center items-center gap-1 text-sm">
                  No password sign-in
                </span>
              </button>
              <div className="flex gap-2">
                {/* google oauth */}
                <button
                  type="button"
                  className="w-full inline-block bg-white hover:bg-neutral-100 text-black py-2.5 font-semibold rounded-md transition-colors ring-1 ring-inset ring-neutral-200"
                  onClick={() => handleGoogleSignin()}
                >
                  <span className="flex justify-center items-center gap-1 text-sm">
                    <Image
                      src="/images/google.svg"
                      alt="Google"
                      width={20}
                      height={20}
                    />
                    Google
                  </span>
                </button>

                {/* github oauth */}
                <button
                  data-variant="slim"
                  className="w-full inline-block bg-neutral-800 hover:bg-neutral-900 text-white py-2.5 font-normal rounded-md transition-colors"
                  onClick={() => handleGitHubSignin()}
                >
                  <span className="flex justify-center items-center gap-1 text-sm">
                    <AiOutlineGithub size={20} /> GitHub
                  </span>
                </button>
              </div>
              {/* sign up */}
              <div className="pt-1 text-center text-sm">
                <span className="text-accent-7">Don't have an account?</span>{" "}
                <a className="text-accent-9 font-bold hover:underline cursor-pointer">
                  Sign Up
                </a>
              </div>
            </div>
          </div>

          {/* second page */}
          <div className="w-full shrink-0 text-black z-50 px-1 flex flex-col">
            {/* magic link */}
            <div className="flex-1">
              <h1 className="text-xl font-semibold mb-6">
                Sign in with no password.
              </h1>
              <label>
                <input
                  className="text-sm font-normal w-full bg-white ring-inset ring-1 ring-neutral-300 px-3 py-2.5 outline-none focus:ring-inset focus:ring-neutral-300 focus:ring-2 border-none rounded-md mb-2.5"
                  type="email"
                  placeholder="Email"
                  value={email?.toString()}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <button
                type="button"
                className={`w-full bg-violet-500 hover:bg-violet-600 transition-colors text-white px-3 py-2 rounded-md font-medium mb-4`}
                onClick={(e) => handlePasswordlessSignin(e)}
              >
                Send me the link!
              </button>

              <p className="text-xs text-neutral-400">
                A magic link is a secure login method that lets you sign in
                without a password. Click the link in your e-mail to access your
                account.
              </p>
            </div>
            <button
              type="button"
              className="w-full inline-block bg-white hover:bg-neutral-100 text-black py-2.5 font-semibold rounded-md transition-colors ring-1 ring-inset ring-neutral-200"
              onClick={() => setIsMagicLink((prev) => !prev)}
            >
              <span className="flex justify-center items-center gap-1 text-sm">
                <HiOutlineArrowNarrowLeft size={20} /> back
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
