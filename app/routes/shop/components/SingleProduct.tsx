import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../components/Image";
import { Product } from "../../../types/Product";

const SingleProduct = ({ data }: { data: Product }) => {
  return (
    <Link to={`/products/${data.id}`}>
      <div className="h-full p-4 border shadow rounded-md flex flex-col gap-4 text-left">
        <div className="w-[90%] mx-auto ">
          <Image
            src={data.image}
            imageClassName="object-contain rounded-sm"
            loaderClassName="h-[160px]"
          />
        </div>

        <div className="flex flex-col">
          <p className="!font-mono">{data.name}</p>

          <p className="!font-mono">{data.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
