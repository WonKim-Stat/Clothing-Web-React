import { CategoryItem } from "../categories/category.types";

export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
  SET_CART_OPEN = "cart/SET_CART_OPEN",
  SET_CART_COUNT = "cart/SET_CART_COUNT",
  SET_CART_TOTAL = "cart/SET_CART_TOTAL",
}

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

// type CartItem = CategoryItem with quantity (added through intersection &)
export type CartItem = CategoryItem & {
  quantity: number;
};
