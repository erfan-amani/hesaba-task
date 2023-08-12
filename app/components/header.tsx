import React from "react";
import SearchInput from "./Search";
import { Link } from "react-router-dom";
import HeaderCart from "./HeaderCart";
import ArrowLeftOnRectangleIcon from "@heroicons/react/24/outline/ArrowLeftOnRectangleIcon";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { logout } from "../redux/reducers/auth/authSlice";

export default function Header() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  const logoutHandler = () => {
    dispatch(logout());
  };

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
        {user?.email ? (
          <button
            onClick={logoutHandler}
            className="border px-2 h-full rounded-md py-2"
          >
            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
          </button>
        ) : (
          <Link
            to="/login"
            className="flex items-center border border-gray-600 rounded-lg"
          >
            <span className="px-5 py-2">ورود</span>
            <div className="h-[70%] w-[1px] bg-gray-600" />
            <button className="px-5 py-2">ثبت نام</button>
          </Link>
        )}

        <HeaderCart />
      </div>
    </div>
  );
}
