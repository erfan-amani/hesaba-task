import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import cartReducer from "./reducers/cart/cartSlice";
import authReducer from "./reducers/auth/authSlice";
import storage from "redux-persist/lib/storage";

const persistedCartReducer = persistReducer(
  { key: "site.cart", storage },
  cartReducer
);
const persistedAuthReducer = persistReducer(
  { key: "site.auth", storage },
  authReducer
);

export const store = configureStore({
  reducer: { cart: persistedCartReducer, auth: persistedAuthReducer },
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
