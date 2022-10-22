// import "./check-out.styles.jsx";

import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";

import CheckoutItem from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/components/checkout-item/checkout-item.component.jsx";

import {
  Total,
  HeaderBlock,
  CheckoutHeader,
  CheckoutContainer,
} from "./check-out.styles";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
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
      <Total>Total: ${cartTotal} </Total>
    </CheckoutContainer>
  );
};

export default CheckOut;
