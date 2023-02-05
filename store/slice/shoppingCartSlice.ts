import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product, ShoppingCartItem, ShoppingCartState } from "typings";

const initialState: ShoppingCartState = {
  items: [],
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ShoppingCartItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<ShoppingCartItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
