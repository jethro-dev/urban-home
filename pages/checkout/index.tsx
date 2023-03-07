import React, { ReactElement } from "react";
import CartDetail from "../../components/CartDetail";
import OrderSummary from "@components/OrderSummary";
import Layout from "@layout/Layout";
import BannerLayout from "@layout/BannerLayout";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import CheckoutForm from "@components/CheckoutForm";

type Props = {};

const CheckoutPage = (props: Props) => {
  const cartItems = useSelector((state: RootState) => state.shoppingCart.items);
  const dispatch = useDispatch();
  console.log({ cartItems });
  return (
    <div className="max-w-7xl mx-auto mt-4 lg:mt-6 px-4 lg:px-6">
      <div className="w-full relative gap-4 lg:gap-8 grid grid-cols-12 mb-6">
        <div className="col-span-12 md:col-span-7 lg:col-span-8  w-full">
          <CartDetail cartItems={cartItems} />
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <OrderSummary cartItems={cartItems} />
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
};

CheckoutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BannerLayout>{page}</BannerLayout>
    </Layout>
  );
};

export default CheckoutPage;
