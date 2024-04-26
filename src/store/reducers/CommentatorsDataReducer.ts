import {
  CommentsState,
  CommentsAction,
  CommentsActionTypes,
} from "../../types/types";

export const initialCommentatotsState: CommentsState = {
  commentatorsData: [],
};

export const commentatorsReducer = (
  state = initialCommentatotsState,
  action: CommentsAction
) => {
  switch (action.type) {
    case CommentsActionTypes.SET_COMMENT_TO_COMMENTATORS_DATA:
      return {
        ...state,
        commentatorsData: [...state.commentatorsData, action.payload],
      };
    default:
      return state;
  }
};
