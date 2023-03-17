import { AddressElement } from "@stripe/react-stripe-js";
import { signOut, useSession } from "next-auth/react";
import React from "react";

type Props = {};

const CheckoutFormUserPanel = ({}: Props) => {
  const { data: session } = useSession();

  return (
    <div>
      {" "}
      {session ? (
        <div className=" bg-green-100 px-3 py-2.5 rounded-md shadow-sm">
          <h3 className="text-sm mb-2 font-medium">Check out as</h3>
          <div>
            {/* left */}
            <div className="flex items-center gap-2 mb-2 bg-white ring-1 ring-neutral-100 p-2 rounded-md">
              <img
                src={session.user?.image || `/images/user-pfp-placeholder.jpg`}
                alt={(session.user?.name as string) || ""}
                className="h-10 w-10 rounded-full"
              />
              <span className="text-sm font-normal text-neutral-800">
                {session.user?.email}
              </span>
            </div>
            {/* right */}
            <div className="flex justify-between gap-2 items-center text-sm font-normal text-neutral-800">
              <span>Want to check out as guest?</span>
              <button
                type="button"
                className=" underline"
                onClick={() => signOut({ redirect: false })}
              >
                log out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-green-100 px-3 py-2.5 rounded-md shadow-sm mb-4">
            <h3 className="text-sm mb-2">
              You are now checking out as{" "}
              <span className="font-semibold">guest</span>.
            </h3>
            <h3 className="text-sm">
              <span className="font-semibold">Log in</span> for faster checkout.
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutFormUserPanel;
