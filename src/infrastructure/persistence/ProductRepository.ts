import { Product } from "../../core/domain/entities/Product";

const products: Product[] = [];

export const saveProduct = (product: Product): void => {
  products.push(product);
};

export const findProductById = (productId: string): Product | undefined => {
  return products.find((product) => product.id === productId);
};

export const updateProductInRepo = (product: Product): void => {
  const index = products.findIndex((p) => p.id === product.id);
  if (index !== -1) {
    products[index] = product;
  }
};

export const deleteProductFromRepo = (productId: string): void => {
  const index = products.findIndex((product) => product.id === productId);
  if (index !== -1) {
    products.splice(index, 1);
  }
};

export const getAllProducts = (): Product[] => {
  return products;
};
