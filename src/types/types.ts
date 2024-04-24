export interface ICard {
  id: number;
  name: string;
  description: string;
  longerDescription: string;
  currentPrice: number;
  prevPrice: number;
  label: string;
  image: string;
  rating: number;
  category: string;
  tags: string[];
  count: number;
}

export interface IUser {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  state: string;
  city: string;
  phone: string;
  emailAddress: string;
  additionalInformation: string;
  directBankTransfer: boolean;
  products: ICard[];
}

export enum SortingTypes {
  DEFAULT = "DEFAULT",
  PRICE = "PRICE",
  NAME = "NAME",
}

export interface ProductsState {
  productsHome: ICard[];
  productsShop: ICard[];
  productsRelated: ICard[];
  pageHome: number;
  pageShop: number;
  pageRelated: number;
  limitHome: 8;
  limitShop: 16;
  loading: boolean;
  error: null | string;
  boughtProducts: ICard[];
  comparedProducts: ICard[];
  searchTerm: string;
  total: number;
  sortType: SortingTypes;
  selectedProduct: ICard | null;
}

export interface CustomersState {
  customersData: IUser[];
}

export enum ProductsActionTypes {
  SET_INITIAL_STATE_HOME = "SET_INITIAL_STATE_HOME",
  SET_INITIAL_STATE_SHOP = "SET_INITIAL_STATE_SHOP",
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_HOME_SUCCESS = "FETCH_PRODUCTS_HOME_SUCCESS",
  FETCH_PRODUCTS_SHOP_SUCCESS = "FETCH_PRODUCTS_SHOP_SUCCESS",
  FETCH_PRODUCTS_RELATED_SUCCESS = "FETCH_PRODUCTS_RELATED_SUCCESS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
  SET_PRODUCTS_PAGE = "SET_PRODUCTS_PAGE",
  SET_PRODUCTS_LIMIT = "SET_PRODUCTS_LIMIT",
  SET_PRODUCTS_SORT = "SET_PRODUCTS_SORT",
  SET_PRODUCTS_TO_CART = "SET_PRODUCTS_TO_CART",
  SET_PRODUCTS_TO_COMPARED = "SET_PRODUCTS_TO_COMPARED",
  SET_SEARCH_TERM = "SET_SEARCH_TERM",
  FETCH_MORE_PRODUCTS_SUCCESS = "FETCH_MORE_PRODUCTS_SUCCESS",
  FETCH_MORE_PRODUCTS_RELATED_SUCCESS = "FETCH_MORE_PRODUCTS_RELATED_SUCCESS",
  SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT",
  REMOVE_ALL_PRODUCTS_FROM_CART = "REMOVE_ALL_PRODUCTS_FROM_CART",
}

export enum CustomersActionTypes {
  SET_USER_TO_CUSTOMERS = "SET_USER_TO_CUSTOMERS",
}

interface SetInitialStateHomeAction {
  type: ProductsActionTypes.SET_INITIAL_STATE_HOME;
  payload: ProductsState;
}

interface SetInitialStateShopAction {
  type: ProductsActionTypes.SET_INITIAL_STATE_SHOP;
  payload: ProductsState;
}

interface FetchProductsAction {
  type: ProductsActionTypes.FETCH_PRODUCTS;
}

interface FetchMoreProducts {
  type: ProductsActionTypes.FETCH_MORE_PRODUCTS_SUCCESS;
  payload: { page: number; items: ICard[] };
}

interface FetchMoreProductsRelated {
  type: ProductsActionTypes.FETCH_MORE_PRODUCTS_RELATED_SUCCESS;
  payload: { page: number; items: ICard[] };
}

interface FetchProductsHomeSuccessAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_HOME_SUCCESS;
  payload: { items: ICard[]; page: number };
}

interface FetchProductsShopSuccessAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_SHOP_SUCCESS;
  payload: { items: ICard[]; total: number };
}

interface FetchProductsRelatedSuccessAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_RELATED_SUCCESS;
  payload: { items: ICard[]; page: number };
}

interface FetchProductsErrorAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

interface SetProductsPageAction {
  type: ProductsActionTypes.SET_PRODUCTS_PAGE;
  payload: number;
}

interface SetProductsLimitAction {
  type: ProductsActionTypes.SET_PRODUCTS_LIMIT;
  payload: number;
}

interface SetProductsSortAction {
  type: ProductsActionTypes.SET_PRODUCTS_SORT;
  payload: SortingTypes;
}

interface SetProductsToCartAction {
  type: ProductsActionTypes.SET_PRODUCTS_TO_CART;
  payload: ICard;
}

interface SetProductsToComparedAction {
  type: ProductsActionTypes.SET_PRODUCTS_TO_COMPARED;
  payload: ICard;
}

interface SetSearchTermAction {
  type: ProductsActionTypes.SET_SEARCH_TERM;
  payload: string;
}

interface SetSelectedProductAction {
  type: ProductsActionTypes.SET_SELECTED_PRODUCT;
  payload: ICard;
}

interface RemoveAllProductsFromCartAction {
  type: ProductsActionTypes.REMOVE_ALL_PRODUCTS_FROM_CART;
  payload: [];
}

export type ProductsAction =
  | SetInitialStateHomeAction
  | SetInitialStateShopAction
  | FetchProductsAction
  | FetchProductsHomeSuccessAction
  | FetchProductsShopSuccessAction
  | FetchProductsRelatedSuccessAction
  | FetchMoreProducts
  | FetchMoreProductsRelated
  | FetchProductsErrorAction
  | SetProductsPageAction
  | SetProductsLimitAction
  | SetProductsSortAction
  | SetProductsToCartAction
  | SetProductsToComparedAction
  | SetSearchTermAction
  | SetSelectedProductAction
  | RemoveAllProductsFromCartAction;

interface SetUserToCustomersAction {
  type: CustomersActionTypes.SET_USER_TO_CUSTOMERS;
  payload: IUser;
}

export type CustomersAction = SetUserToCustomersAction;
