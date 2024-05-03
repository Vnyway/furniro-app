import { Dispatch } from "redux";
import {
  ISubscriber,
  SubscribersAction,
  SubscribersActionTypes,
} from "../../types/types";

export const addSubscriber = (subscriber: ISubscriber): SubscribersAction => {
  return {
    type: SubscribersActionTypes.ADD_SUBSCRIBER,
    payload: subscriber,
  };
};
