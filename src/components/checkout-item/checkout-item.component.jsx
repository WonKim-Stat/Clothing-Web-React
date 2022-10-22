import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

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
  const { removeItem, addItemToCart, decreaseQuantity } =
    useContext(CartContext);

  const removeHandler = () => removeItem(cartItem);
  const addHandler = () => addItemToCart(cartItem);
  const decreaseHandler = () => decreaseQuantity(cartItem);

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
