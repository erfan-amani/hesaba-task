import React from "react";
import { Link } from "react-router-dom";

const CartInfo = ({
  cartDetail,
}: {
  cartDetail: { total: number; count: number };
}) => {
  return (
    <div className="">
      <h3 className="font-bold text-xl p-3">صورتحساب</h3>

      <div className="p-6 shadow-sm rounded-xl border">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center justify-between text-gray-600">
              <p>قیمت محصولات</p>
              <p className="!font-mono">${cartDetail.total}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>جمع کل</p>
              <p className="!font-mono">${cartDetail.total}</p>
            </div>
          </div>

          <div className="pt-2">
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
  );
};

export default CartInfo;
