import {
  CustomersState,
  CustomersAction,
  CustomersActionTypes,
} from "../../types/types";

export const initialCustomersState: CustomersState = {
  customersData: [],
};

export const customersReducer = (
  state = initialCustomersState,
  action: CustomersAction
) => {
  switch (action.type) {
    case CustomersActionTypes.SET_USER_TO_CUSTOMERS:
      return {
        ...state,
        customersData: [...state.customersData, action.payload],
      };
    default:
      return state;
  }
};
