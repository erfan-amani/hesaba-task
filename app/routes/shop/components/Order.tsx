import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getPriceNumber } from "../../../utils/helpers";
import Square3Stack3DIcon from "@heroicons/react/24/outline/Square3Stack3DIcon";
import { Product } from "../../../types/Product";

export const ORDER_OPTIONS = [
  {
    name: "بیشترین قیمت",
    id: "price-desc",
    sort: (p1: Product, p2: Product) =>
      getPriceNumber(p2.price) - getPriceNumber(p1.price),
  },
  {
    name: "کمترین قیمت",
    id: "price-asc",
    sort: (p1: Product, p2: Product) =>
      getPriceNumber(p1.price) - getPriceNumber(p2.price),
  },
  {
    name: "نام کالا",
    id: "name",
    sort: (p1: Product, p2: Product) =>
      p1.name > p2.name ? 1 : p2.name > p1.name ? -1 : 0,
  },
];

const Order = () => {
  const [searchParams] = useSearchParams();
  const selcetedOrder = searchParams.get("order");

  return (
    <div className="flex items-center gap-8 p-4 bg-sky-50 rounded-xl">
      <div className="flex items-center gap-2">
        <Square3Stack3DIcon className="w-5 h-5" />
        <p className="text-sm">ترتیب: </p>
      </div>
      <div className="flex items-center gap-6">
        {ORDER_OPTIONS.map(({ name, id }) => (
          <Link
            key={id}
            to={`/products?order=${id}`}
            className={`text-sm text-gray-500 ${
              selcetedOrder === id ? "text-indigo-600" : ""
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Order;
