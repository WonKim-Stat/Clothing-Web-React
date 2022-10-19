import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import App from "./App";
import { UserProvider } from "./contexts/user.context";

import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import { ProductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// So here inside of APP, we want our sign in form to be able to access this context
reportWebVitals();
