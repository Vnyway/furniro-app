import { Dispatch } from "redux";
import {
  IComment,
  CommentsAction,
  CommentsActionTypes,
} from "../../types/types";

export const setCommentToCommentatorsData = (
  comment: IComment
): CommentsAction => {
  return {
    type: CommentsActionTypes.SET_COMMENT_TO_COMMENTATORS_DATA,
    payload: comment,
  };
};
