import productJson from "../assets/json/products.json";
import { Product } from "../types/Product";

const data = productJson as Product[];

export const getAllProducts = (searchTerm?: string | null) => {
  if (searchTerm) {
    const filteredData = data.filter((p) =>
      p.name.toLocaleLowerCase().includes(searchTerm)
    );

    return filteredData;
  }

  return data;
};

export const getOneProducts = (id: string) => {
  const product = data.find((p) => p.id === id);

  return product;
};
