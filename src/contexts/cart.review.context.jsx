// default form
import { useEffect, useReducer } from "react";
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

const decreaseHelper = (cartItems, itemToDecrease) => {
  const targetItem = cartItems.find((item) => {
    return item.id === itemToDecrease.id;
  });
  if (targetItem.quantity === 1) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== targetItem.id;
    });
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToDecrease.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setcartItems: () => {},
  addItemToCart: () => {},
  cartQuantity: 0,
  setCartQuantity: () => {},

  removeItem: () => {},
  decreaseQuantity: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(identifyHandler(cartItems, productToAdd));
  };
  const decreaseQuantity = (itemToDecrease) => {
    setCartItems(decreaseHelper(cartItems, itemToDecrease));
  };

  const removeItem = (productToRemoved) => {
    setCartItems(
      cartItems.filter((cartItem) => {
        return cartItem.id !== productToRemoved.id;
      })
    );
  };

  useEffect(() => {
    const newCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartQuantity(newCount);
  }, [cartItems]); // whenever cartItems change

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]); // whenever cartItems change

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartQuantity,
    setCartQuantity,

    removeItem,
    decreaseQuantity,
    cartTotal,
    setCartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
