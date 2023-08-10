import React, { useRef } from "react";
import { getAllProducts } from "../../../utils/data";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const data = useRef(getAllProducts());

  return (
    <div className="grid grid-cols-4 gap-4 ">
      {data.current.slice(0, 20).map((product) => (
        <SingleProduct key={product.id} data={product} />
      ))}
    </div>
  );
};

export default Products;
