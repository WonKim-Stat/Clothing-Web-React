import { useContext } from "react";

import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import { UserContext } from "../../../contexts/user.context";

import { CartContext } from "../../../contexts/cart.context";

import { signOutUser } from "../../../utils/firebase/firebase.utils";

import { ReactComponent as CrwnLogo } from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/assets/crown.svg";

// import "./navigation.styles.jsx";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN-OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN-IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
