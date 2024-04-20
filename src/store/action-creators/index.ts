import * as ProductsActionCreators from "./produtsAction";
import * as CustomersActionCreators from "./customersAction";

export default {
  ...ProductsActionCreators,
  ...CustomersActionCreators,
};
