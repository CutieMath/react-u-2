import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Create our own logger middleware
// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
//   console.log("type", action.type);
//   console.log("payload", action.payload);
//   console.log("Current State", store.getState());
//   next(action);
//   console.log("Next State", store.getState());
// };

// Persist
const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["user"], // may conflict with local storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Persist

// Catch actions before a reducer is hit
const middleWares = [logger];
const composeEnhancers = compose(applyMiddleware(...middleWares));
// Catch actions before a reducer is hit

export const store = createStore(persistedReducer, undefined, composeEnhancers);
export const persistor = persistStore(store);
