import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../types/Product";
import { getOneProducts } from "../../utils/data";
import AddToCartButton from "./components/AddToCart";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    navigate("/");
    return null;
  }

  const product = useMemo(() => getOneProducts(id), [id]);

  return (
    <div>
      <div className="flex flex-row-reverse gap-4 text-left">
        <div>
          <img src={product?.image} />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col [&>*]:!font-mono flex-1">
            <h2 className="text-lg font-bold">{product?.name}</h2>
            <p>{product?.price}</p>
            <p className="mt-2">{product?.describe}</p>
          </div>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
