import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const configureStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(createSagaMiddleware()))
  );
};
export default configureStore;
