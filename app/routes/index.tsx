import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Help from "./help";
import Product from "./product";
import Shop from "./shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "help",
    element: <Help />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
