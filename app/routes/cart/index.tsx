import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartInfo from "./components/CartInfo";
import List from "./components/List";

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
    <div className="max-w-screen-2xl mx-auto px-4 xl:px-10">
      <div className="flex justify-between">
        <div className="w-[60%] ">
          <List items={cartItems} cartDetail={cartDetail} />
        </div>

        <div className="w-[35%]">
          <CartInfo cartDetail={cartDetail} />
        </div>
      </div>
    </div>
  );
};

export default HeaderCart;
