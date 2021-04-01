import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import tasks from "./reducers/tasks";

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
);

export default createStore(tasks, composedEnhancer);