import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/reducer";
import {logger} from "redux-logger";

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
const middlewareList = [thunk, logger];
const enhancer = composeEnhancers(applyMiddleware(...middlewareList));

const store = createStore(reducer, enhancer);

export default store;
