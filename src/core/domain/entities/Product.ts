export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const createProductEntity = (
  id: string,
  name: string,
  price: number,
  description: string
): Product => ({
  id,
  name,
  price,
  description,
});
