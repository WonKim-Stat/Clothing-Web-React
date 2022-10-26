// import { useContext } from "react";

// import { CartContext } from "../../contexts/cart.context";

// import { Link } from "react-router-dom";
import { useNavigate, useNaviggate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.components";

import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";

// import "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/components/cart-dropdown/cart-dropdown.style.scss";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.style";

const CartDropdown = () => {
  // const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);

  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(!isCartOpen));
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
