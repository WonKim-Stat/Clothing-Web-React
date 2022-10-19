import "./check-out.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";

import CheckoutItem from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/components/checkout-item/checkout-item.component.jsx";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(
        (cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
        // <div key={cartItem.id}>
        //   <h2>{cartItem.name}</h2>
        //   <span onClick={() => decreaseQuantity(cartItem)}>Decrement</span>
        //   <span>{cartItem.quantity}</span>
        //   <span onClick={() => addItemToCart(cartItem)}>Increment</span>
        //   <span>{cartItem.price}</span>
        //   <span onClick={() => removeItem(cartItem)}>Remove</span>
        // </div>
      )}
      <span className="total">Total: ${cartTotal} </span>
    </div>
  );
};

export default CheckOut;
