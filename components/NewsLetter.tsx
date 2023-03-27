import Image from "next/image";
import React, { FormEvent } from "react";
import { toast } from "react-toastify";

type Props = {};

const NewsLetter = (props: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for subscribing", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="py-32 px-4 lg:px-6 bg-neutral-50">
      <form
        className="space-y-2 bg-emerald-200 rounded-md shadow-sm max-w-6xl mx-auto h-[400px] flex overflow-hidden"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex-1 relative">
          <Image
            src="/images/newsletter-cover-img.jpg"
            alt="Subscribe to newsletter"
            fill={true}
            className="object-fit object-cover brightness-75"
          />
        </div>

        <div className="flex-[2] p-6">
          <h3 className="text-3xl font-bold text-green-700 mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="mb-4 text-sm font-light">
            Subscribe to our newsletter to recieve the latest news and exclusive
            offers.
          </p>
          <label htmlFor="email" />

          <input
            type="email"
            name="email"
            placeholder="peterparker@gmail.com"
            className="border-none outline-none w-[300px] h-12 focus:ring-0 rounded-l-md"
          />
          <button
            type="submit"
            className="text-emerald-200 px-2.5 h-12 bg-black rounded-r-md"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
