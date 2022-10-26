import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import App from "./App";
// import { UserProvider } from "./contexts/user.context";

import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
// import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <UserProvider> */}
        {/* <CategoriesProvider> */}
        {/* <CartProvider> */}
        <App />
        {/* </CartProvider> */}
        {/* </CategoriesProvider> */}
        {/* </UserProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// So here inside of APP, we want our sign in form to be able to access this context
reportWebVitals();
