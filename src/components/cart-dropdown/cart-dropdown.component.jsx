import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

// import { Link } from "react-router-dom";
import { useNavigate, useNaviggate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.components";

// import "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/components/cart-dropdown/cart-dropdown.style.scss";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.style";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>This is empty</EmptyMessage>
        )}
      </CartItems>
      {/* <Link to="/checkout"> */}
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      {/* </Link> */}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
