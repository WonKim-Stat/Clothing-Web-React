import { AnyAction } from "redux";
import { CART_ACTION_TYPES, CartState } from "./cart.types";
import { setIsCartOpen, setCartItems } from "./cart.action";

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): CartState => {
  // const { type, payload } = action;

  if (setIsCartOpen.match(action)) {
    return { ...state, isCartOpen: action.payload };
  }
  if (setCartItems.match(action)) {
    return { ...state, cartItems: action.payload };
  }
  return state;

  // switch (type) {
  //   case CART_ACTION_TYPES.SET_CART_ITEMS:
  //     return { ...state, cartItems: payload };
  //   case CART_ACTION_TYPES.SET_CART_OPEN:
  //     return { ...state, isCartOpen: payload };
  //   default:
  //     return state;
  // }
};
