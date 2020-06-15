import { PRODUCTS_RECEIVED } from "../actions";

const initialProps = {
    products: [],
    cart: [
        {
            title: 'Item1',
            price: 800,
            category: 'Cat1',
            quantity: 1
        },
        {
            title: 'Item1',
            price: 800,
            category: 'Cat1',
            quantity: 1
        },
        {
            title: 'Item1',
            price: 800,
            category: 'Cat1',
            quantity: 1
        }
    ]
};

export default (state = initialProps, { type, data }) => {
    switch (type) {
        case PRODUCTS_RECEIVED:
            return {
                ...state,
                products: data
            };
        default:
            return state;
    }
};