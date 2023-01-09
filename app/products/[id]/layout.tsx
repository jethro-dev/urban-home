import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <div className="max-w-[1440px] mx-auto">{children}</div>;
};

export default layout;
