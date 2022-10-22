// import { ReactComponent as ShoppingIcon } from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/assets/shopping-bag.svg";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CartIconContainer,
  ShoppingIconImage,
  ItemCount,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartQuantity } = useContext(CartContext);

  const cartOpenHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer>
      <ShoppingIconImage onClick={cartOpenHandler} />

      <ItemCount>{cartQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
