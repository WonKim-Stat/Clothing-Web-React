// default form
import { createContext, useReducer } from "react";

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

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartQuantity: 0,
  cartTotal: 0,
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_OPEN: "SET_CART_OPEN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
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
  const [{ cartItems, isCartOpen, cartQuantity, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const setIsCartOpen = (bool) => {
    dispatch({ type: CART_ACTION_TYPES.SET_CART_OPEN, payload: bool });
  };

  const updateCartItemsReducer = (newCartItems) => {
    const newCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartQuantity: newCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = identifyHandler(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const decreaseQuantity = (itemToDecrease) => {
    const newCartItems = decreaseHelper(cartItems, itemToDecrease);
    updateCartItemsReducer(newCartItems);
  };

  const removeItem = (productToRemoved) => {
    const newCartItems = cartItems.filter((cartItem) => {
      return cartItem.id !== productToRemoved.id;
    });
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartQuantity,
    removeItem,
    decreaseQuantity,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
