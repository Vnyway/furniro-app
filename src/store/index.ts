import { applyMiddleware, createStore } from "redux";
import { productsReducer } from "./reducers/productsReducer";
import { thunk } from "redux-thunk";
import { customersReducer } from "./reducers/customersDataReducer";
import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(rootReducer as any, applyMiddleware(thunk));
