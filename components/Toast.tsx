import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";

type Props = {
  className: string;
  position: string;
  toastList: any[];
};

const Toast = ({ className, position, toastList }: Props) => {
  return (
    <div
      className={`ring-2 text-sm fixed mt-20 mr-4 ring-inset ${position} space-y-2.5`}
    >
      {toastList.map((toast, idx) => (
        <div
          key={idx}
          className={`ring-2 flex items-center gap-2 p-2 rounded-md ${position}`}
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <div>
            <p className="notification-title">Title</p>
            <p className="notification-message">Messagasdsadsadasde</p>
          </div>
          <button className="block ring-2">
            <GrClose fontSize={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
