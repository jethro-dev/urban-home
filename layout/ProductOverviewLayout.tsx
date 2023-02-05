// components/layout.js
import { useState } from "react";
import Header from "@components/Header";
import LoginForm from "@components/LoginForm";
import CartModal from "@components/CartModal";
import BreadcrumbComponent from "@components/Breadcrumb";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbComponent />
      <div>{children}</div>
    </>
  );
}
