import React, { ReactElement } from "react";
import CartDetail from "../../components/CartDetail";
import OrderSummary from "@components/OrderSummary";
import Layout from "@layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";

type Props = {};

const CartPage = (props: Props) => {
  const items = useSelector((state: RootState) => state.shoppingCart.items);
  const dispatch = useDispatch();
  console.log({ items });
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-[2]">
        <CartDetail />
      </div>
      <div className="flex-[1]">
        <OrderSummary />
      </div>
    </div>
  );
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CartPage;
