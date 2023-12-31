import React from "react";
import Order from "./components/Order";
import Products from "./components/Products";

const Shop = () => {
  return (
    <div className="flex flex-col gap-4 container mx-auto">
      <Order />
      <Products />
    </div>
  );
};

export default Shop;
