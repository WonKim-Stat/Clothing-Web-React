// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";

import { useDispatch } from "react-redux";
import {
  removeItem,
  decreaseQuantity,
  addItemToCart,
} from "../../store/cart/cart.action";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

// import "./checkout-item.styles.jsx";
import {
  RemoveButton,
  Price,
  Value,
  Arrow,
  Quantity,
  Name,
  ImageContainer,
  CheckoutItemContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // const { removeItem, addItemToCart, decreaseQuantity } =
  //   useContext(CartContext);

  const removeHandler = () => dispatch(removeItem(cartItems, cartItem));
  const addHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const decreaseHandler = () => dispatch(decreaseQuantity(cartItems, cartItem));

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>

      <Quantity>
        <Arrow onClick={decreaseHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addHandler}>&#10095;</Arrow>
      </Quantity>

      <Price>{price}</Price>
      <RemoveButton onClick={removeHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
