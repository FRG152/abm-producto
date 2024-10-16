import { useState, useEffect } from "react";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../core/application/usecases/index";
import { getAllProducts } from "../../infrastructure/persistence/ProductRepository";
import ProductView from "../views/ProductView";
import { ProductDTO } from "../../core/application/dto/ProductDTO";

const ProductController = (): JSX.Element => {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setProducts(getAllProducts());
  };

  const handleAddProduct = (newProduct: ProductDTO) => {
    createProduct(newProduct);
    fetchProducts();
  };

  const handleUpdateProduct = (updatedProduct: ProductDTO) => {
    updateProduct(updatedProduct);
    fetchProducts();
  };

  const handleDeleteProduct = (productId: string) => {
    deleteProduct(productId);
    fetchProducts();
  };

  return (
    <ProductView
      products={products}
      onAddProduct={handleAddProduct}
      onUpdateProduct={handleUpdateProduct}
      onDeleteProduct={handleDeleteProduct}
    />
  );
};

export default ProductController;
