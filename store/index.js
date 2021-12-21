import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const RootReducer = combineReducers({});

export default createStore(RootReducer);
