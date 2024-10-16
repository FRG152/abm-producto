import {
  findProductById,
  deleteProductFromRepo,
} from "../../../infrastructure/persistence/ProductRepository";
import { productNotFoundException } from "../../domain/exceptions/ProductNotFoundException";

export const deleteProduct = (productId: string): void => {
  const product = findProductById(productId);
  if (!product) {
    throw productNotFoundException(productId);
  }
  deleteProductFromRepo(productId);
};
