import { useContext } from "react";

import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import { UserContext } from "../../../contexts/user.context";

import { signOutUser } from "../../../utils/firebase/firebase.utils";

import { ReactComponent as CrwnLogo } from "/Users/wonseokkim/complete-react/clothing-shop/src/assets/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrwnLogo className="logo" />
          </div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN-OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
