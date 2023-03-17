import { ShoppingCartItem } from "typings";

export const calculateOrderAmount = (cartItems: ShoppingCartItem[]) => {
  return cartItems.reduce(function (acc, obj) {
    return acc + obj.product.price * obj.quantity;
  }, 0);
};

export const calculateOrderAmountWithShipping = (
  cartItems: ShoppingCartItem[]
) => {
  return (
    cartItems.reduce(function (acc, obj) {
      return acc + obj.product.price * obj.quantity;
    }, 0) + 5
  );
};
