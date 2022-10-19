import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/assets/shopping-bag.svg";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartQuantity } = useContext(CartContext);

  const cartOpenHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={cartOpenHandler} />

      <span className="item-count">{cartQuantity}</span>
    </div>
  );
};

export default CartIcon;
