import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./routes/shop";
import Product from "./routes/product";
import Help from "./routes/help";
import Layout from "./components/Layout";
import Cart from "./routes/cart";
import Login from "./routes/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/products",
        element: <Shop />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "help",
        element: <Help />,
      },
    ],
  },
  { path: "login", element: <Login /> },
]);

const Main = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default Main;
