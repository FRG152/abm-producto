import React, { useEffect, useState } from "react";
import { ProductDTO } from "../../core/application/dto/ProductDTO";
import {
  ProductViewContainer,
  ProductForm,
  FormTitle,
  FormInput,
  SubmitButton,
  ProductList,
  ListTitle,
  ProductItem,
  ProductInfo,
  ProductDescription,
  DeleteButton,
} from "./ProductViewStyles";
import { ListOfCharacters } from "../../infrastructure/api/endpoints";
import CardComponent from "../../presentation/components/Card";

const FormComponent = React.lazy(() => import("design_system/Form"));
const ButtonComponent = React.lazy(() => import("design_system/Button"));

interface ProductViewProps {
  products: ProductDTO[];
  onAddProduct: (newProduct: ProductDTO) => void;
  onUpdateProduct: (updatedProduct: ProductDTO) => void;
  onDeleteProduct: (productId: string) => void;
}

const ProductView = ({
  products,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
}: ProductViewProps): JSX.Element => {
  const [productInput, setProductInput] = useState<ProductDTO>({
    id: "",
    name: "",
    price: 0,
    description: "",
  });
  const [data, setData] = useState([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      productInput.name &&
      productInput.price > 0 &&
      productInput.description
    ) {
      if (productInput.id) {
        onUpdateProduct(productInput);
      } else {
        onAddProduct(productInput);
      }
      setProductInput({ id: "", name: "", price: 0, description: "" });
    } else {
      alert("Por favor, complete todos los campos antes de guardar.");
    }
  };

  useEffect(() => {
    ListOfCharacters().then((response) => {
      setData(response?.data?.results);
    });
  }, []);

  return (
    <>
      <ProductViewContainer>
        {/* <FormTitle>ABM de Productos</FormTitle>
        <ProductForm onSubmit={handleSubmit}>
          <FormInput
            type="text"
            value={productInput.name}
            onChange={(e) =>
              setProductInput({ ...productInput, name: e.target.value })
            }
            placeholder="Nombre del Producto"
          />
          <FormInput
            type="number"
            value={productInput.price}
            onChange={(e) =>
              setProductInput({
                ...productInput,
                price: parseFloat(e.target.value),
              })
            }
            placeholder="Precio del Producto"
          />
          <FormInput
            as="textarea"
            value={productInput.description}
            onChange={(e) =>
              setProductInput({ ...productInput, description: e.target.value })
            }
            placeholder="Descripción del Producto"
          />
          <SubmitButton type="submit">Guardar Producto</SubmitButton>
        </ProductForm> */}
      </ProductViewContainer>

      <FormComponent />

      {/* <ProductList>
        {data.map((item: any) => {
          return <CardComponent img={item.image} name={item.name} />;
        })}
      </ProductList> */}
      <ButtonComponent text={"Design System Button"} />
    </>
  );
};

export default ProductView;
