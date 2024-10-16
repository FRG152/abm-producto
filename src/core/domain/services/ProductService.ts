// src/core/application/ProductService.ts
import { Product } from "../../domain/entities/Product";

export class ProductService {
  addProduct(product: Product, products: Product[]): Product[] {
    return [...products, product];
  }

  updateProduct(updatedProduct: Product, products: Product[]): Product[] {
    return products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
  }

  deleteProduct(productId: string, products: Product[]): Product[] {
    return products.filter((product) => product.id !== productId);
  }
}
