import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../types/Product";

export interface CartInitialState {
  products: Product[];
}
const initialState: CartInitialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
