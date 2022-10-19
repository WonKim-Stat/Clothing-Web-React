import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { removeItem, addItemToCart, decreaseQuantity } =
    useContext(CartContext);

  const removeHandler = () => removeItem(cartItem);
  const addHandler = () => addItemToCart(cartItem);
  const decreaseHandler = () => decreaseQuantity(cartItem);

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={decreaseHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addHandler}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeHandler}>
        &#1005;
      </div>
    </div>
  );
};

export default CheckoutItem;
