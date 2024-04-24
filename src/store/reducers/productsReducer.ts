import {
  ProductsAction,
  ProductsActionTypes,
  ProductsState,
  SortingTypes,
} from "../../types/types";

export const initialState: ProductsState = {
  productsHome: [],
  productsShop: [],
  productsRelated: [],
  pageHome: 1,
  pageShop: 1,
  pageRelated: 1,
  limitHome: 8,
  limitShop: 16,
  loading: false,
  error: null,
  boughtProducts: [],
  comparedProducts: [],
  searchTerm: "",
  total: 0,
  sortType: SortingTypes.DEFAULT,
  selectedProduct: null,
};

export const productsReducer = (
  state = initialState,
  action: ProductsAction
) => {
  switch (action.type) {
    case ProductsActionTypes.SET_INITIAL_STATE_HOME:
      return { ...state, state: action.payload };
    case ProductsActionTypes.SET_INITIAL_STATE_SHOP:
      return { ...state, state: action.payload };
    case ProductsActionTypes.FETCH_PRODUCTS:
      return { ...state, loading: true };
    case ProductsActionTypes.FETCH_PRODUCTS_HOME_SUCCESS:
      if (state.searchTerm.trim() === "") {
        return {
          ...state,
          loading: false,
          pageHome: action.payload.page,
          productsHome: action.payload.items,
        };
      } else {
        return {
          ...state,
          loading: false,
          productsHome: action.payload.items,
        };
      }
    case ProductsActionTypes.FETCH_PRODUCTS_SHOP_SUCCESS:
      if (state.searchTerm.trim() === "") {
        return {
          ...state,
          loading: false,
          total: action.payload.total,
          productsShop: action.payload.items,
        };
      } else {
        return {
          ...state,
          loading: false,
          total: action.payload.total,
          productsShop: action.payload.items,
        };
      }
    case ProductsActionTypes.FETCH_PRODUCTS_RELATED_SUCCESS:
      if (state.searchTerm.trim() === "") {
        return {
          ...state,
          loading: false,
          pageRelated: action.payload.page,
          productsRelated: action.payload.items,
        };
      } else {
        return {
          ...state,
          loading: false,
          productsRelated: action.payload.items,
        };
      }
    case ProductsActionTypes.FETCH_MORE_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        productsHome: [...state.productsHome, ...action.payload.items],
        pageHome: action.payload.page,
      };
    case ProductsActionTypes.FETCH_MORE_PRODUCTS_RELATED_SUCCESS:
      return {
        ...state,
        loading: false,
        productsRelated: [...state.productsRelated, ...action.payload.items],
        pageRelated: action.payload.page,
      };
    case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ProductsActionTypes.SET_PRODUCTS_PAGE:
      return { ...state, pageShop: action.payload };
    case ProductsActionTypes.SET_PRODUCTS_LIMIT:
      return { ...state, pageShop: 1, limitShop: action.payload };
    case ProductsActionTypes.SET_PRODUCTS_SORT:
      return { ...state, pageShop: 1, sortType: action.payload };
    case ProductsActionTypes.SET_PRODUCTS_TO_CART:
      let isInBoughtProducts = false;
      let updatedProducts = state.boughtProducts.map((product) => {
        if (product.id === action.payload.id) {
          isInBoughtProducts = true;
          return {
            ...product,
            count: action.payload.count,
          };
        }
        return product;
      });
      updatedProducts = updatedProducts.filter((product) => product.count > 0);
      if (!isInBoughtProducts) {
        updatedProducts.push(action.payload);
      }
      return {
        ...state,
        boughtProducts: updatedProducts,
      };
    case ProductsActionTypes.SET_PRODUCTS_TO_COMPARED:
      let isInComparedProducts = false;
      state.comparedProducts.forEach((product) => {
        if (product.id === action.payload.id) {
          isInComparedProducts = true;
        }
      });
      if (!isInComparedProducts) {
        return {
          ...state,
          comparedProducts: [...state.comparedProducts, action.payload],
        };
      } else {
        return state;
      }
    case ProductsActionTypes.SET_SEARCH_TERM:
      return { ...state, pageShop: 1, searchTerm: action.payload };
    case ProductsActionTypes.SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    case ProductsActionTypes.REMOVE_ALL_PRODUCTS_FROM_CART:
      return { ...state, boughtProducts: action.payload };
    default:
      return state;
  }
};
