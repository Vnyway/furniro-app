import {
  SubscribersState,
  SubscribersAction,
  SubscribersActionTypes,
} from "../../types/types";

export const initialCommentatotsState: SubscribersState = {
  subscribersData: [],
};

export const subscribersReducer = (
  state = initialCommentatotsState,
  action: SubscribersAction
) => {
  switch (action.type) {
    case SubscribersActionTypes.ADD_SUBSCRIBER:
      return {
        ...state,
        subscribersData: [...state.subscribersData, action.payload],
      };
    default:
      return state;
  }
};
