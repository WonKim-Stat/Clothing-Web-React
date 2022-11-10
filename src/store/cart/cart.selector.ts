import { createSelector } from "reselect";
import { CartState } from "./cart.types";

const selectCartReducer = (state): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

// for cart item number in the cart icon
export const selectCartCount = createSelector([selectCartItems], (cartItem) =>
  cartItem.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

// for cart price total in the cart review page
export const selectCartTotal = createSelector([selectCartItems], (cartItem) =>
  cartItem.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
