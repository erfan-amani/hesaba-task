import React from "react";
import { CartType } from "../../types/Cart";
import PlusSmallIcon from "@heroicons/react/24/outline/PlusSmallIcon";
import MinusSmallIcon from "@heroicons/react/24/outline/MinusSmallIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addItem, removeItem } from "../../redux/reducers/cart/cartSlice";
import { Product } from "../../types/Product";

const List = ({ items }: { items: CartType[] }) => {
  const dispatch = useDispatch<AppDispatch>();

  const addToCart = async (product: Product) =>
    product && dispatch(addItem(product));
  const removeFromCart = async (product: Product) =>
    product?.id && dispatch(removeItem(product?.id));

  return (
    <div className="flex flex-col gap-4 text-left h-[300px] overflow-auto p-4">
      {items.map(({ product, count, total }) => (
        <div className="flex flex-row-reverse gap-4 px-2">
          <div>
            <img src={product.image} className="w-24 rounded-md" />
          </div>

          <div className="flex flex-col justify-between gap-4 w-full">
            <h3 className="!font-mono font-semibold">{product.name}</h3>

            <div className="flex items-center justify-between">
              <p className="!font-mono text-base">${total}</p>

              <div className="flex items-center gap-3">
                <button
                  className="text-blue-500 p-1 border rounded-md"
                  onClick={() => addToCart(product)}
                >
                  <PlusSmallIcon className="w-5 h-5" />
                </button>

                <p className="font-bold  !font-mono">{count}</p>

                <button
                  className="text-blue-500 p-1 border rounded-md"
                  onClick={() => removeFromCart(product)}
                >
                  {count === 1 ? (
                    <TrashIcon className="w-4 h-4" />
                  ) : (
                    <MinusSmallIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
