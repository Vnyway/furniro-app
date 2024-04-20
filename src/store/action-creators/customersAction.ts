import { Dispatch } from "redux";
import {
  IUser,
  CustomersAction,
  CustomersActionTypes,
} from "../../types/types";

export const setUserToCustomers = (user: IUser): CustomersAction => {
  return { type: CustomersActionTypes.SET_USER_TO_CUSTOMERS, payload: user };
};
