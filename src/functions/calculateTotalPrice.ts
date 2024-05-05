import { ICard } from "../types/types";

export const calculateTotalPrice = (products: ICard[]) => {
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += product.count * product.currentPrice;
  });
  return totalPrice.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
};
