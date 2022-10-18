import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false, // Wow..
  setIsCartOpen: () => {},
  //   currentCart: [], // 이게 아니라
  //   setCurrentCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen }; // we pass these in as values into below
  return <CartContext.Provider value={value}> {children}</CartContext.Provider>;
};
