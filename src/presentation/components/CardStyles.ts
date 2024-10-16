import styled from "styled-components";

export const ProductCard = styled.div`
  
  background-color: #fff,
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin: 10px;
`;

export const ProductCardImage = styled.img`
  border-radius: 10px;
`;

export const ProductCardTitle = styled.h1`
  width: 100%;
  padding: 10px;
  color: #252525;
  font-size: 18px;
  display: flex;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #fff;
`;
