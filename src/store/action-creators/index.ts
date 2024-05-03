import * as ProductsActionCreators from "./produtsAction";
import * as CustomersActionCreators from "./customersAction";
import * as CommentsActionCreators from "./commentsAction";
import * as SubscribersActionCreators from "./subscribersAction";

export default {
  ...ProductsActionCreators,
  ...CustomersActionCreators,
  ...CommentsActionCreators,
  ...SubscribersActionCreators,
};
