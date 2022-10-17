import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { Link } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.components";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const cartHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="/checkout">
        <Button onClick={cartHandler}>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
