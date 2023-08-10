import React from "react";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import MinusIcon from "@heroicons/react/24/outline/MinusIcon";
import { Product } from "../../../types/Product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { addItem, removeItem } from "../../../redux/reducers/cart/cartSlice";

const AddToCartButton = ({ product }: { product: Product | undefined }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart);
  const productInCart = cart.items.find(
    (item) => item.product.id === product?.id
  );

  const addToCart = async () => {
    product && dispatch(addItem(product));
  };
  const removeFromCart = async () => {
    product?.id && dispatch(removeItem(product?.id));
  };

  if (!product?.id) return null;

  return !!productInCart?.count ? (
    <div className="flex gap-3 items-center justify-between w-full [&>*]:!font-mono">
      <button onClick={addToCart} className="p-2 bg-neutral-700 text-gray-50">
        <PlusIcon className="w-4 h-4" />
      </button>

      <div className="flex justify-center gap-2 text-center w-full py-2 bg-neutral-700 text-gray-50 [&>*]:!font-mono">
        <p>In cart: {productInCart.count} items</p> ~{" "}
        <p>${productInCart.total}</p>
      </div>

      <button
        onClick={removeFromCart}
        className="p-2 bg-neutral-700 text-gray-50"
      >
        <MinusIcon className="w-4 h-4" />
      </button>
    </div>
  ) : (
    <button
      onClick={addToCart}
      className="w-full py-2 bg-neutral-700 text-gray-50 !font-mono"
    >
      ADD TO CART
    </button>
  );
};

export default AddToCartButton;
