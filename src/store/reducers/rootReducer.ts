import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { customersReducer } from "./customersDataReducer";
import { commentatorsReducer } from "./CommentatorsDataReducer";
import { subscribersReducer } from "./SubscribersReducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  customers: customersReducer,
  commentators: commentatorsReducer,
  subscribers: subscribersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
