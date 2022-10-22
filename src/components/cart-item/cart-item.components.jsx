// import "./cart-item.styles.jsx";

import { Name, ItemDetails, CartItemContainer } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="quantityandprice">
          {quantity} * ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
