import React from "react";
import ShoppingCartIcon from "@heroicons/react/24/outline/ShoppingCartIcon";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import List from "./List";

const HeaderCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartDetail = cartItems.reduce(
    (prev, cur) => ({
      count: prev.count + cur.count,
      total: prev.total + cur.total,
    }),
    { count: 0, total: 0 }
  );

  return (
    <div className="group relative">
      <div className="h-full">
        <button className="relative border px-2 h-full rounded-md">
          <ShoppingCartIcon className="w-5 h-5" />

          {cartDetail.count && (
            <span className="absolute bottom-[1px] right-[1px] flex items-center justify-center w-4 h-4 rounded-full bg-red-500 text-white text-xs">
              {cartDetail.count}
            </span>
          )}
        </button>
      </div>
      <div className="absolute left-0 z-50 invisible group-hover:visible first-letter:opacity-0 pt-2">
        <div className="w-72 lg:w-[400px] shadow-xl border bg-white rounded-xl">
          <div className="flex flex-col gap-4 text-xs">
            <div className="p-4 pb-2">
              <div className="bg-gray-100 flex items-center justify-between p-3 rounded-md">
                <div className="flex gap-2">
                  <p className="font-bold">سبد خرید شما</p>
                  <p className="text-gray-400">{cartDetail.count} عدد کالا</p>
                </div>

                <div className="flex gap-2 text-blue-700 font-bold">
                  <Link to="/cart">مشاهده سبد خرید</Link>
                  <ChevronLeftIcon className="w-4 h-4" />
                </div>
              </div>
            </div>

            <List items={cartItems} />

            <div className="p-4 pt-2">
              <Link
                to="/cart"
                className="flex items-center justify-center w-full py-2 rounded-md text-center bg-green-500 text-white text-lg"
              >
                <p className="px-5 !font-mono">${cartDetail.total}</p>
                <span className="h-[16px] w-[1.5px] bg-white" />
                <p className="px-5">ثبت سفارش</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCart;
