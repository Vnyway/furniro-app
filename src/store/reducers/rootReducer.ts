import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { customersReducer } from "./customersDataReducer";
import { commentatorsReducer } from "./CommentatorsDataReducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  customers: customersReducer,
  commentators: commentatorsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
