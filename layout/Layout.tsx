// components/layout.js
import { useState } from "react";
import Header from "@components/Header";
import LoginForm from "@components/LoginForm";
import CartDrawer from "@components/CartDrawer";
import Modal from "@components/Modal";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoginFormOpened, setIsLoginFormOpened] = useState<boolean>(false);
  const [isCartOpened, setIsCartOpened] = useState<boolean>(false);

  const toggleLoginForm: Function = () => {
    if (!isLoginFormOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    setIsLoginFormOpened(!isLoginFormOpened);
  };

  const toggleCart: Function = () => {
    if (!isCartOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    setIsCartOpened(!isCartOpened);
  };

  return (
    <div className="relative">
      <Header toggleLoginForm={toggleLoginForm} toggleCart={toggleCart} />
      <main>{children}</main>

      {/* {isLoginFormOpened && <LoginForm toggleLoginForm={toggleLoginForm} />} */}

      <Modal isOpen={isLoginFormOpened} toggleModal={toggleLoginForm}>
        <LoginForm toggleLoginForm={toggleLoginForm} />
      </Modal>

      <CartDrawer
        isOpen={isCartOpened}
        toggleCart={toggleCart}
        title={"Cart"}
      />
    </div>
  );
}
