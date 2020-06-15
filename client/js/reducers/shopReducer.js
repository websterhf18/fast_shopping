import { PRODUCTS_RECEIVED, ADD_PRODUCT } from "../actions";

const initialProps = {
    products: [],
    cart: []
};

export default (state = initialProps, { type, data }) => {
    switch (type) {
        case PRODUCTS_RECEIVED:
            return {
                ...state,
                products: data
            };
        case ADD_PRODUCT:
            return { 
                ...state,
                cart: [...state.cart, data]
            };
        default:
            return state;
    }
};