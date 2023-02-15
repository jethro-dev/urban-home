import React from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  toggleModal: Function;
};

const Modal = ({ children, isOpen, toggleModal }: Props) => {
  return (
    <div
      className={
        " fixed overflow-hidden z-[99] bg-gray-900 bg-opacity-30 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500"
          : " transition-opacity delay-300 duration-500 opacity-0 pointer-events-none")
      }
    >
      <section
        className={
          "max-w-lg left-[50%] translate-x-[-50%] absolute z-[9999] bg-white top-[50%] translate-y-[-50%] shadow-xl delay-400 duration-500 ease-in-out transition-all transform p-6 ring-1 ring-neutral-300 rounded-md " +
          (isOpen ? "opacity-100 " : "opacity-0")
        }
      >
        {children}
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => toggleModal()}
      ></section>
      {/* <button onClick={() => setIsOpen((prev: boolean) => !prev)}>close</button> */}
    </div>
  );
};

export default Modal;
