import { ProductDTO } from "../dto/ProductDTO";
import {
  findProductById,
  updateProductInRepo,
} from "../../../infrastructure/persistence/ProductRepository";
import { productNotFoundException } from "../../domain/exceptions/ProductNotFoundException";

export const updateProduct = (productDTO: ProductDTO): void => {
  const existingProduct = findProductById(productDTO.id);
  if (!existingProduct) {
    throw productNotFoundException(productDTO.id);
  }
  const updatedProduct = {
    ...existingProduct,
    name: productDTO.name,
    price: productDTO.price,
    description: productDTO.description,
  };
  updateProductInRepo(updatedProduct);
};
