export const PRODUCTS_REQUEST = "PRODUCTS_REQUEST";
export const PRODUCTS_RECEIVED = "PRODUCTS_RECEIVED";

export const requestProducts = () => ({ type: PRODUCTS_REQUEST });
export const receiveProducts = data => ({ type: PRODUCTS_RECEIVED, data });