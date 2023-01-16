import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/rootSaga";
import filmReducer from "./Reducer/filmReducer";
import filterReducer from "./Reducer/filterReducer";
import tabReducer from "./Reducer/tabReducer";
import authReducer from "./Reducer/authReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  tab: tabReducer,
  film: filmReducer,
  filter: filterReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);