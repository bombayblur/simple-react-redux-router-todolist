import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/tasks";

export default createStore(rootReducer, applyMiddleware(thunk));