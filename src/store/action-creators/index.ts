import * as ProductsActionCreators from "./produtsAction";
import * as CustomersActionCreators from "./customersAction";
import * as CommentsActionCreators from "./commentsAction";

export default {
  ...ProductsActionCreators,
  ...CustomersActionCreators,
  ...CommentsActionCreators,
};
