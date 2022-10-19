import { useState, createContext } from "react";
import PRODUCTS from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
