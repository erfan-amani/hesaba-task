import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Product } from "../../../types/Product";
import { getAllProducts } from "../../../utils/data";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [data, setData] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");
  const selcetedOrder = searchParams.get("order") || "";

  useEffect(() => {
    const data = getAllProducts(searchTerm, selcetedOrder);

    console.log({ data });

    setData(data);
  }, [searchTerm, selcetedOrder]);

  return (
    <div className="grid grid-cols-4 gap-4 ">
      {data.slice(0, 20).map((product) => (
        <SingleProduct key={product.id} data={product} />
      ))}
    </div>
  );
};

export default Products;
