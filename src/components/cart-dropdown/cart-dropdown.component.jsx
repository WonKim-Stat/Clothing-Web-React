import Button from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/components/button/button.component.jsx";

import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
