import productJson from "../assets/json/products.json";
import { ORDER_OPTIONS } from "../routes/shop/components/Order";
import { Product } from "../types/Product";

const data = productJson as Product[];

export const getAllProducts = (
  searchTerm?: string | null,
  selcetedOrder?: string
) => {
  let filteredData = data;

  if (searchTerm) {
    filteredData = data.filter((p) =>
      p.name.toLocaleLowerCase().includes(searchTerm)
    );
  }

  if (selcetedOrder) {
    const orderFunction = ORDER_OPTIONS.find(
      (oi) => oi.id === selcetedOrder
    )?.sort;

    if (orderFunction) {
      filteredData = filteredData.sort((a, b) => orderFunction(a, b));
    }
  }

  return filteredData;
};

export const getOneProducts = (id: string) => {
  const product = data.find((p) => p.id === id);

  return product;
};
