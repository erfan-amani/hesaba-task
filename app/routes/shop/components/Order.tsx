import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getPriceNumber } from "../../../utils/helpers";

export const ORDER_OPTIONS = [
  {
    name: "بیشترین قیمت",
    id: "price-desc",
    sort: (p1: string, p2: string) => getPriceNumber(p2) - getPriceNumber(p1),
  },
  {
    name: "کمترین قیمت",
    id: "price-asc",
    sort: (p1: string, p2: string) => getPriceNumber(p1) - getPriceNumber(p2),
  },
  {
    name: "نام کالا",
    id: "name",
    sort: (p1: string, p2: string) => getPriceNumber(p1) - getPriceNumber(p2),
  },
];

const Order = () => {
  const [searchParams] = useSearchParams();
  const selcetedOrder = searchParams.get("order");

  return (
    <div className="p-4 bg-sky-50">
      <div className="flex items-center gap-4">
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
