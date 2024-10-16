import styled from "styled-components";

export const ProductViewContainer = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
`;

export const ProductForm = styled.form`
  gap: 15px;
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const FormInput = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ProductList = styled.div`
  heigth: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ListTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
`;

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  border-radius: 6px;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const ProductInfo = styled.div`
  max-width: 75%;
  font-size: 18px;
  color: #555;
`;

export const ProductDescription = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: #777;
`;

export const DeleteButton = styled.button`
  padding: 8px 12px;
  color: #fff;
  background-color: #dc3545;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;
