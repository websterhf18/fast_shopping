export const PRODUCTS_REQUEST = "PRODUCTS_REQUEST";
export const PRODUCTS_RECEIVED = "PRODUCTS_RECEIVED";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_CUSTOMER = "UPDATE_CUSTOMER";

export const REQUEST_CUSTOMER = "REQUEST_CUSTOMER";
export const RECEIVE_CUSTOMER = "RECEIVE_CUSTOMER";
export const EMPTY_CUSTOMER = "EMPTY_CUSTOMER";

export const REQUEST_ORDER = "REQUEST_ORDER";
export const RECEIVE_ORDER = "RECEIVE_ORDER";

export const FILTER_PRODUCTS = "FILTER_PRODUCTS";

export const requestProducts = () => ({ type: PRODUCTS_REQUEST });
export const receiveProducts = data => ({ type: PRODUCTS_RECEIVED, data });
export const addProductCart = data => ({ type: ADD_PRODUCT, data });
export const updateQuantity = data => ({ type: UPDATE_PRODUCT, data });
export const removeItemAction = data => ({ type: DELETE_PRODUCT, data });
export const updateCustomerAction = data => ({ type: UPDATE_CUSTOMER, data });

export const requestCustomerAction = data => ({ type: REQUEST_CUSTOMER, data });
export const receiveCustomerAction = data => ({ type: RECEIVE_CUSTOMER, data });
export const emptyCustomerAction = () => ({ type: EMPTY_CUSTOMER });

export const requestOrderAction = data => ({ type: REQUEST_ORDER, data });
export const receiveOrderAction = data => ({ type: RECEIVE_ORDER, data });

export const filterProductsAction = data => ({ type: FILTER_PRODUCTS, data });