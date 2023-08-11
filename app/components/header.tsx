import React from "react";
import SearchInput from "./Search";
import { Link } from "react-router-dom";
import HeaderCart from "./HeaderCart";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full py-4 px-4 shadow-md">
      <div className="flex items-center gap-8">
        <Link to="/">
          <h1 className="text-lg font-bold">حسابا</h1>
        </Link>

        <div className="">
          <SearchInput />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex items-center border border-gray-600 rounded-lg">
          <button className="px-5 py-2">ورود</button>
          <div className="h-[70%] w-[1px] bg-gray-600" />
          <button className="px-5 py-2">ثبت نام</button>
        </div>

        <HeaderCart />
      </div>
    </div>
  );
}
