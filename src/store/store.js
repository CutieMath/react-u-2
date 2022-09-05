import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// Catch actions before a reducer is hit
const middleWares = [logger];
const composeEnhancers = compose(applyMiddleware(...middleWares));
// Catch actions before a reducer is hit

export const store = createStore(rootReducer, undefined, composeEnhancers);