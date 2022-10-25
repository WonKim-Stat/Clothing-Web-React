import Navigation from "./components/routes/navigation/navigation.component";
import Shop from "./components/routes/shop/shop.component";
import Home from "./components/routes/home/home.component";
import CheckOut from "./components/routes/check-out/check-out.component";

import { Routes, Route } from "react-router-dom";
import Authentication from "./components/routes/authentication/authentication.component";

import { useEffect } from "react";

import { setCurrentUser } from "./store/user/user.action";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // console.log(user);
      dispatch(setCurrentUser(user));
      if (user) {
        createUserDocumentFromAuth(user);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;

// THis is a test for branch
