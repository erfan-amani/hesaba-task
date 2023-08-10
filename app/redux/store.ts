import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedCartReducer = persistReducer(
  { key: "site.cart", storage },
  cartReducer
);

export const store = configureStore({
  reducer: { cart: persistedCartReducer },
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
