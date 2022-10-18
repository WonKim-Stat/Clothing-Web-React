import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import { SignoutUser } from "../../../utilities/firebase/firebase.utility";
// avoid unnecessary wrapping <div> so that it just render list of sibling components
// Here we list one <div> section and <Outlet/> without wrapping them with <div> by uing <Fragment>

// Link provides declarative, accessible navigation around your application.

import { ReactComponent as CrwnLogo } from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/assets/crown.svg";
import "./navigation.styles.scss";

import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context";

import { CartContext } from "../../../contexts/cart.context";
import CartIcon from "../../cart-icon/cart-icon.component";

import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext); //  conditionally render the CART dropdown based on the truthiness

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? ( // Where there is a login user, change it to sign out ork
            <span className="nav-link">SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          {<CartIcon />}
        </div>
        {/* Using shortcircuit operator */}
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation; // as
