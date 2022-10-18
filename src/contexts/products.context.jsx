import { createContext, useState } from "react";

import PRODUCTS from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/shop-data.json";

// actual value you want to access
export const ProductsContext = createContext({
  currentProduct: [],
}); // We need default value(initial value).

// actual component wrpping component tree
export const ProductsProvider = ({ children }) => {
  //we want to store current user info
  const [currentProduct, setCurrentProduct] = useState(PRODUCTS); // initialize the value null
  const value = { currentProduct };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

// There are four steps to using React context:

// Create context using the createContext method.
// Take your created context and wrap the context provider around your component tree.
// Put any value you like on your context provider using the value prop.
// Read that value within any component by using the context consumer.
