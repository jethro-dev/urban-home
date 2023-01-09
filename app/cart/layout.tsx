import React from "react";

type Props = { children: React.ReactNode };

const CartLayout = ({ children }: Props) => {
  return <div className="max-w-[1280px] mx-auto">{children}</div>;
};

export default CartLayout;
