import { ProductCard, ProductCardTitle } from "./CardStyles";

interface CardComponentProps {
  img?: string;
  name: string;
}

const CardComponent = ({ img, name }: CardComponentProps) => {
  return (
    <ProductCard>
      {img && <img src={img} alt="image" />}
      <ProductCardTitle>{name}</ProductCardTitle>
    </ProductCard>
  );
};

export default CardComponent;
