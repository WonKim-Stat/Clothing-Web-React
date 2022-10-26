import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (bool) => ({
  type: CART_ACTION_TYPES.SET_CART_OPEN,
  payload: bool,
});

export const updateCartItemsReducer = (newCartItems) => ({
  type: CART_ACTION_TYPES.SET_CART_ITEMS,
  payload: newCartItems,
});

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = identifyHandler(cartItems, productToAdd);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};
export const decreaseQuantity = (cartItems, itemToDecrease) => {
  const newCartItems = decreaseHelper(cartItems, itemToDecrease);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const removeItem = (cartItems, productToRemoved) => {
  const newCartItems = cartItems.filter((cartItem) => {
    return cartItem.id !== productToRemoved.id;
  });
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

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
