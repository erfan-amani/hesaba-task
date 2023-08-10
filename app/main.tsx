import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/header";
import Footer from "./components/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./routes/shop";
import Product from "./routes/product";
import Help from "./routes/help";
import Layout from "./components/Layout";

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
        path: "help",
        element: <Help />,
      },
    ],
  },
]);

const Main = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default Main;
