import React from "react";
import PlusSmallIcon from "@heroicons/react/24/outline/PlusSmallIcon";
import MinusSmallIcon from "@heroicons/react/24/outline/MinusSmallIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { useDispatch } from "react-redux";
import { CartType } from "../../../types/Cart";
import { AppDispatch } from "../../../redux/store";
import { Product } from "../../../types/Product";
import { addItem, removeItem } from "../../../redux/reducers/cart/cartSlice";
import Image from "../../../components/Image";

const List = ({
  items,
  cartDetail,
}: {
  items: CartType[];
  cartDetail: { total: number; count: number };
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const addToCart = async (product: Product) =>
    product && dispatch(addItem(product));
  const removeFromCart = async (product: Product) =>
    product?.id && dispatch(removeItem(product?.id));

  return (
    <div className="flex flex-col">
      <div className="">
        <div className="flex items-center justify-between p-3 rounded-md">
          <div className="flex gap-2">
            <p className="font-bold">سبد خرید شما</p>
            <p className="text-gray-400">{cartDetail.count} عدد کالا</p>
          </div>

          <button className="flex items-center gap-2 text-sm text-gray-400">
            <span>حذف سبد خرید</span>
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-left">
        {items.map(({ product, count, total }) => (
          <div className="flex flex-row-reverse gap-4 p-6 border rounded-lg">
            <div>
              <Image
                src={product.image}
                loaderClassName="h-[135px] rounded-md"
                imageClassName="w-80 rounded-md"
              />
              {/* <img src={product.image} className="w-80 rounded-md" /> */}
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
    </div>
  );
};

export default List;
