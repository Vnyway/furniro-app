import { Dispatch } from "redux";
import {
  ICard,
  ProductsAction,
  ProductsActionTypes,
  SortingTypes,
} from "../../types/types";

export const setInitialStateHome = () => {
  return {
    type: ProductsActionTypes.SET_INITIAL_STATE_HOME,
    payload: {
      productsHome: [],
      pageHome: 1,
      loading: false,
      error: null,
      limit: 4,
      searchTerm: "",
    },
  };
};

export const setInitialStateShop = () => {
  return {
    type: ProductsActionTypes.SET_INITIAL_STATE_SHOP,
    payload: {
      productsShop: [],
      pageShop: 1,
      loading: false,
      error: null,
      limit: 4,
      searchTerm: "",
    },
  };
};

export const fetchCardsHome = (
  page: number,
  limit: number,
  searchTerm: string
) => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS });
      const response = await fetch("../../../products.json");
      const { data, meta }: { data: ICard[]; meta: any } =
        await response.json();
      let items;
      if (searchTerm.trim() === "") {
        items = data.slice(page - 1, limit);
        page = 1;
      } else {
        items = data.filter((product) => {
          return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
      }
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_HOME_SUCCESS,
        payload: { items, page },
      });
    } catch (e) {
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Error fetching users...",
      });
    }
  };
};

export const fetchCardsShop = (
  page: number,
  limit: number,
  searchTerm: string,
  sortType: SortingTypes
) => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS });
      const response = await fetch("../../../products.json");
      const { data, meta }: { data: ICard[]; meta: any } =
        await response.json();
      let array;
      let items;
      let total;
      switch (sortType) {
        case SortingTypes.DEFAULT:
          array = data;
          break;
        case SortingTypes.PRICE:
          array = data.sort((a, b) => a.currentPrice - b.currentPrice);
          break;
        case SortingTypes.NAME:
          array = data.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if (nameA < nameB) return -1;

            if (nameA > nameB) return 1;

            return 0;
          });
          break;
      }
      const startIndex = Math.min((page - 1) * limit, meta.total);
      const endIndex = Math.min(page * limit, meta.total);
      if (searchTerm.trim() === "") {
        total = meta.total;
        items = array.slice(startIndex, endIndex);
      } else {
        let filteredData = array.filter((product) => {
          return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        items = filteredData.slice(startIndex, endIndex);
        total = filteredData.length;
      }
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_SHOP_SUCCESS,
        payload: { items, total },
      });
    } catch (e) {
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Error fetching users...",
      });
    }
  };
};

export const fetchCardsRelated = (
  page: number,
  limit: number,
  searchTerm: string
) => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS });
      const response = await fetch("../../../products.json");
      const { data, meta }: { data: ICard[]; meta: any } =
        await response.json();
      let items;
      if (searchTerm.trim() === "") {
        items = data.slice(page - 1, limit);
        page = 1;
      } else {
        items = data.filter((product) => {
          return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
      }
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_RELATED_SUCCESS,
        payload: { items, page },
      });
    } catch (e) {
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Error fetching users...",
      });
    }
  };
};

export const fetchMoreCards = (page: number, limit: number) => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS });
      page += 1;
      const response = await fetch("../../../products.json");
      const { data, meta }: { data: ICard[]; meta: any } =
        await response.json();
      const items = data.slice((page - 1) * limit, page * limit + limit);
      dispatch({
        type: ProductsActionTypes.FETCH_MORE_PRODUCTS_SUCCESS,
        payload: { page, items },
      });
    } catch (e) {
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Error fetching users...",
      });
    }
  };
};

export const fetchMoreCardsRelated = (page: number, limit: number) => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS });
      page += 1;
      const response = await fetch("../../../products.json");
      const { data, meta }: { data: ICard[]; meta: any } =
        await response.json();
      const items = data.slice((page - 1) * limit, page * limit + limit);
      dispatch({
        type: ProductsActionTypes.FETCH_MORE_PRODUCTS_RELATED_SUCCESS,
        payload: { page, items },
      });
    } catch (e) {
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Error fetching users...",
      });
    }
  };
};

export const setProductsPage = (page: number): ProductsAction => {
  return { type: ProductsActionTypes.SET_PRODUCTS_PAGE, payload: page };
};

export const setProductsLimit = (limit: number): ProductsAction => {
  return { type: ProductsActionTypes.SET_PRODUCTS_LIMIT, payload: limit };
};

export const setProductsSort = (sortType: SortingTypes): ProductsAction => {
  return { type: ProductsActionTypes.SET_PRODUCTS_SORT, payload: sortType };
};

export const setProductsToCart = (
  object: ICard,
  count: number
): ProductsAction => {
  if (count >= 0) {
    object.count = count;
  }
  return {
    type: ProductsActionTypes.SET_PRODUCTS_TO_CART,
    payload: object,
  };
};

export const setProductsToCompared = (object: ICard): ProductsAction => {
  return {
    type: ProductsActionTypes.SET_PRODUCTS_TO_COMPARED,
    payload: object,
  };
};

export const setSearchTerm = (
  event: React.ChangeEvent<HTMLInputElement>
): ProductsAction => {
  const newValue = event.target.value;
  return {
    type: ProductsActionTypes.SET_SEARCH_TERM,
    payload: newValue,
  };
};

export const setSelectedProduct = (object: ICard): ProductsAction => {
  return { type: ProductsActionTypes.SET_SELECTED_PRODUCT, payload: object };
};
