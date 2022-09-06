import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

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

// Catch actions before a reducer is hit
const middleWares = [logger];
const composeEnhancers = compose(applyMiddleware(...middleWares));
// Catch actions before a reducer is hit

export const store = createStore(rootReducer, undefined, composeEnhancers);
