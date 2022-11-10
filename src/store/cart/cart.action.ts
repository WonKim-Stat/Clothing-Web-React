import { CART_ACTION_TYPES } from "./cart.types";
import { CartItem } from "./cart.types";
import { CategoryItem } from "../categories/category.types";
import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

// help function
const identifyHandler = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
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

const decreaseHelper = (
  cartItems: CartItem[],
  itemToDecrease: CartItem
): CartItem[] => {
  const targetItem = cartItems.find((item) => {
    return item.id === itemToDecrease.id;
  });
  if (targetItem && targetItem.quantity === 1) {
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

const clearCartItemHelper = (
  cartItems: CartItem[],
  itemToDelete: CartItem
): CartItem[] =>
  cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);

// --- ------------------------------- ---
export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_OPEN,
  boolean
>;
export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

// --- ------------------------------- ---
export const setIsCartOpen = withMatcher(
  (bool: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_CART_OPEN, bool)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

// --- ------------------------------- ---
export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = identifyHandler(cartItems, productToAdd);
  return setCartItems(newCartItems);
};
export const decreaseQuantity = (
  cartItems: CartItem[],
  itemToDecrease: CartItem
) => {
  const newCartItems = decreaseHelper(cartItems, itemToDecrease);
  return setCartItems(newCartItems);
};

export const removeItem = (
  cartItems: CartItem[],
  productToRemoved: CartItem
) => {
  const newCartItems = clearCartItemHelper(cartItems, productToRemoved);
  return setCartItems(newCartItems);
};
