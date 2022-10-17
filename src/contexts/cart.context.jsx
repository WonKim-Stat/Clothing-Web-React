// default form
import { useEffect } from "react";
import { createContext, useState } from "react";

// help function
const identifyHandler = (cartItems, productToAdd) => {
  const itemToAdd = cartItems.find((item) => item.id === productToAdd.id);
  if (itemToAdd) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setcartItems: () => {},
  addItemToCart: () => {},
  cartQuantity: 0,
  setCartQuantity: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(identifyHandler(cartItems, productToAdd));
  };

  useEffect(() => {
    const newCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartQuantity(newCount);
  }, [cartItems]); // whenever cartItems change

  // const addItemToCart = (productToAdd) => {
  //     setCartItems(identifyHandler(cartItems, productToAdd));
  //     setCartQuantity(
  //       cartItems.reduce(function (accumulator, currentelement) {
  //         return accumulator + currentelement.quantity;
  //       }, 1)
  //     );
  //   };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartQuantity,
    setCartQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
