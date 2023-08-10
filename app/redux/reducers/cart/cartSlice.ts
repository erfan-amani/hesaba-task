import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartType } from "../../../types/Cart";
import { Product } from "../../../types/Product";

export interface CartInitialState {
  items: CartType[];
}
const initialState: CartInitialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const product = action.payload;

      const index = state.items.findIndex((i) => i.product.id === product.id);
      const oneItemPrice = +product.price.split("$")[1];

      if (index === -1) {
        const newItem: CartType = {
          product: product,
          count: 1,
          total: oneItemPrice,
        };

        state.items.push(newItem);
      } else {
        state.items[index].count++;
        state.items[index].total = state.items[index].total + oneItemPrice;
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      const id = action.payload;

      const index = state.items.findIndex((i) => i.product.id === id);

      if (index !== -1) {
        const item = state.items[index];

        if (item.count === 1) {
          state.items.splice(index, 1);
        } else {
          state.items[index].count--;
          state.items[index].total =
            state.items[index].total - +item.product.price.split("$")[1];
        }
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
