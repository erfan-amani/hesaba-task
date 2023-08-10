import React from "react";
import ShoppingCartIcon from "@heroicons/react/24/outline/ShoppingCartIcon";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full py-4 px-4 shadow-md">
      <div>
        <h1 className="text-lg font-bold">حسابا</h1>
      </div>

      <div className="">
        <div className="flex items-center gap-4 w-72 2lg:w-[652px] py-2 px-3 bg-gray-100 rounded-md">
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />

          <input
            className="bg-transparent flex-1 placeholder:text-xs"
            placeholder="محصول مورد نظرتان را جستجو کنید"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex items-center border border-gray-600 rounded-lg">
          <button className="px-5 py-2">ورود</button>
          <div className="h-[70%] w-[1px] bg-gray-600" />
          <button className="px-5 py-2">ثبت نام</button>
        </div>

        <button className="relative border px-2 rounded-md">
          <ShoppingCartIcon className="w-5 h-5" />

          {false && (
            <span className="absolute bottom-[1px] right-[1px] flex items-center justify-center w-4 h-4 rounded-full bg-red-500 text-white text-xs">
              1
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
