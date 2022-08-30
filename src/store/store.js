import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// Runs before an action hits a reducer
const middleWares = [logger];
const composeEnhancers = compose(applyMiddleware(...middleWares));
// Runs before an action hits a reducer

export const store = createStore(rootReducer, undefined, composeEnhancers);
