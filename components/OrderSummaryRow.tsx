import Image from "next/image";
import React from "react";

type Props = {};

const OrderSummaryRow = (props: Props) => {
  return (
    <div className="flex items-stretch ring-1">
      <Image
        src="/images/rick.svg"
        alt="Rick"
        width={50}
        height={50}
        className="p-2"
      />
      <span className="flex-1 flex items-center px-2 font-medium">Rick</span>
      <span className="w-[50px] flex items-center justify-center font-medium">
        1
      </span>
    </div>
  );
};

export default OrderSummaryRow;
