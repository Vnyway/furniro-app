import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { customersReducer } from "./customersDataReducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  customers: customersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
