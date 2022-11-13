// import { ReactComponent as ShoppingIcon } from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/assets/shopping-bag.svg";

// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";

import {
  CartIconContainer,
  ShoppingIconImage,
  ItemCount,
} from "./cart-icon.styles";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";

const CartIcon = () => {
  // const { isCartOpen, cartQuantity, setIsCartOpen } = useContext(CartContext);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartQuantity = useSelector(selectCartCount);

  const cartOpenHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer>
      <ShoppingIconImage onClick={cartOpenHandler} />
      <ItemCount>{cartQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
