import Link from "next/link";
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { FiShoppingBag } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useRouter } from "next/router";

type Props = {
  toggleLoginForm: Function;
  toggleCart: Function;
};

const Header = ({ toggleLoginForm, toggleCart }: Props) => {
  const { data: session } = useSession();
  const cartItems = useSelector((state: RootState) => state.shoppingCart.items);
  const router = useRouter();
  const [searchString, setSearchString] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "/products",
      query: { q: searchString },
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full max-w-7xl mx-auto mt-2 z-[40] px-4 lg:px-6">
      {/* wrapper */}
      <div className="bg-white mx-auto px-8 pb-6 lg:pb-0 rounded-lg shadow-2xl border border-neutral-100">
        {/* upper */}
        <div className="flex justify-between py-4">
          {/* left */}
          <div className="flex items-center flex-1">
            <Link aria-label="Logo" href="/" className="font-semibold text-xl">
              UH
              {/* <Image
                src="/logo.svg"
                alt="Anima Squad Logo"
                width={64}
                height={64}
              /> */}
            </Link>
            <nav className="lg:flex gap-6 ml-6 hidden items-center px-4 [&>*]:text-sm [&>*]:font-normal">
              <Link href="/products/featured">About</Link>
              <Link href="/products">Furniture</Link>
              <Link href="/products/new-arrivals">New Arrivals</Link>
            </nav>
          </div>
          {/* middle */}
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="justify-center flex-1 lg:flex relative hidden"
          >
            <div className="w-full">
              <label className="hidden" htmlFor="search">
                Search
              </label>
              <input
                id="search"
                className="w-full h-full bg-transparent text-black placeholder:text-neutral-400 ring-1 ring-neutral-300 focus:ring-neutral-400 focus:outline-none text-sm rounded px-2"
                placeholder="Search for products..."
                value={searchString}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchString(e.target.value.toLowerCase())
                }
              />
              <button
                type="submit"
                className="grid place-items-center absolute right-0 bottom-0 top-0 px-2"
              >
                <AiOutlineSearch size={24} />
              </button>
            </div>
          </form>
          {/* right */}
          <div className="flex items-center justify-end flex-1">
            <nav>
              <ul className="flex gap-6">
                <li className={`grid place-items-center`}>
                  <button
                    aria-label="Cart items: 0"
                    onClick={() => toggleCart((prev: boolean) => !prev)}
                    className="relative"
                  >
                    <FiShoppingBag
                      size={28}
                      className="hover:scale-105 transition-all"
                    />

                    <span
                      className={`absolute top-[-12px] right-[-10px] z-10 bg-violet-500 shadow-md text-white rounded-full h-6 w-6 text-xs grid place-items-center transition-all ${
                        cartItems.length > 0 ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {cartItems.length}
                    </span>
                  </button>
                </li>
                <li className="grid place-items-center">
                  {session ? (
                    <button
                      className="ring-2 hover:scale-105 ring-neutral-700 rounded-full overflow-hidden transition-all"
                      onClick={() => signOut({ redirect: false })}
                    >
                      <div className="w-[28px] h-[28px] p-[1px]">
                        {session.user?.image ? (
                          <img
                            src={`${session.user?.image}`}
                            alt={`${session.user?.name}`}
                            className="rounded-full"
                          />
                        ) : (
                          <img
                            src={`/images/user-pfp-placeholder.jpg`}
                            alt={`${session.user?.name}`}
                          />
                        )}
                      </div>
                    </button>
                  ) : (
                    <button
                      className="hover:scale-105 ring-2 ring-neutral-700 p-1  rounded-full text-neutral-700 hover:text-black transition-all"
                      onClick={() => toggleLoginForm()}
                    >
                      <AiOutlineUser size={20} />
                    </button>
                  )}
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
        <div className="justify-center flex-1 lg:hidden relative">
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
      </div>
    </header>
  );
};

export default Header;
