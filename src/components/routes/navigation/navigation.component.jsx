import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
// avoid unnecessary wrapping <div> so that it just render list of sibling components
// Here we list one <div> section and <Outlet/> without wrapping them with <div> by uing <Fragment>

// Link provides declarative, accessible navigation around your application.

import { ReactComponent as CrwnLogo } from "/Users/wonseokkim/complete-react/clothing-shop/src/assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
