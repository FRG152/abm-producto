import { ProductDTO } from "../dto/ProductDTO";
import { saveProduct } from "../../../infrastructure/persistence/ProductRepository";
import { createProductEntity } from "../../domain/entities/Product";

export const createProduct = (productDTO: ProductDTO): void => {
  const product = createProductEntity(
    productDTO.id,
    productDTO.name,
    productDTO.price,
    productDTO.description
  );
  saveProduct(product);
};
