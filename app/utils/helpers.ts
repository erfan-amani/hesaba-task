export const getPriceNumber = (value: string): number => {
  return +value.split("$")[1];
};
