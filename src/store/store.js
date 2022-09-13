import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist
const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["user"], // may conflict with local storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Persist

// Catch actions before a reducer is hit
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
); // Filter will remove any falsy values
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));
// Catch actions before a reducer is hit

export const store = createStore(persistedReducer, undefined, composeEnhancers);
export const persistor = persistStore(store);
