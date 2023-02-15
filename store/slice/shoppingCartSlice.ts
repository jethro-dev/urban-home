import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ShoppingCartItem, ShoppingCartState } from "typings";

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
    updateItemQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = action.payload.quantity;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateItemQuantity } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
