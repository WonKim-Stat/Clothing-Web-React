import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import App from "./App";
// import { UserProvider } from "./contexts/user.context";

import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";

import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// So here inside of APP, we want our sign in form to be able to access this context
reportWebVitals();
