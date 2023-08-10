import { Product } from "./Product";

export interface CartType {
  product: Product;
  count: number;
  total: number;
}
