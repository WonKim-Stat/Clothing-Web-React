// import Directory from "./components/directory/directory.component";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import SignIn from "./components/routes/sign-in/sign-in.component";

import Shop from "./components/routes/shop/shop.component";

import CartIcon from "/Users/wonseokkim/complete-react/clothing-shop/src/components/cart-icon/cart-icon.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* instead of path, use index--> as long as parent's / match, it will be rendered in the outlet position */}

        {/* <Route path="home" element={<Home />} /> */}
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<SignIn />} />
        {/* <Route path="cart" element={<CartIcon />} /> */}
      </Route>
    </Routes>
  );
};

export default App;

// THis is a test for branch
