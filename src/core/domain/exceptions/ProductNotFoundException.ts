export const productNotFoundException = (productId: string): Error => {
  const error = new Error(`Product with ID ${productId} not found.`);
  error.name = "ProductNotFoundException";
  return error;
};
