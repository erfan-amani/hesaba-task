import productJson from "../assets/json/products.json";
import { Product } from "../types/Product";

const data = productJson as Product[];

export const getAllProducts = () => {
  return data;
};

export const getOneProducts = (id: string) => {
  const product = data.find((p) => p.id === id);

  return product;
};
