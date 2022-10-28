import {
  compose,
  configureStore,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

// export const store = configureStore({ reducer: rootReducer ,middleWares = [logger]});

const sagaMiddleware = createSagaMiddleware();
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
  // thunk,
].filter(Boolean);
const composedEnhancers = compose(applyMiddleware(...middleWares));

const persistConfig = {
  key: "root", //persist whole thing
  storage,
  blacklist: ["user"], // actual value
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
