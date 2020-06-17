import { 
    PRODUCTS_RECEIVED, 
    ADD_PRODUCT, 
    UPDATE_PRODUCT, 
    DELETE_PRODUCT, 
    UPDATE_CUSTOMER,
    REQUEST_CUSTOMER,
    RECEIVE_CUSTOMER, 
    EMPTY_CUSTOMER,
    REQUEST_ORDER,
    RECEIVE_ORDER,
    FILTER_PRODUCTS
} from "../actions";

const initialProps = {
    products: [],
    cart: [],
    customerType: 'new',
    customerData: null,
    onLoading: false,
    onLoadingOrder: false,
    orderData: null,
    filterType: 'default'
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
        case UPDATE_CUSTOMER:
            return { 
                ...state,
                customerType: data
            };
        case UPDATE_PRODUCT:
            let UpdateArray = state.cart.map((element, index) => index == data.index ? Object.assign({}, element, { quantity : data.quantity }) : element);
            return { 
                ...state,
                cart: UpdateArray
            };
        case DELETE_PRODUCT:
            let RemoveArray = state.cart.filter((element, index) => index !== data);
            return { 
                ...state,
                cart: RemoveArray
            };
        case REQUEST_CUSTOMER:
            return { 
                ...state,
                onLoading: true
            };
        case RECEIVE_CUSTOMER:
            return { 
                ...state,
                onLoading: false,
                customerData: data
            };
        case EMPTY_CUSTOMER:
            return { 
                ...state,
                customerData: null
            };
        case REQUEST_ORDER:
            return { 
                ...state,
                onLoadingOrder: true
            };
        case RECEIVE_ORDER:
            return { 
                ...state,
                onLoadingOrder: false,
                orderData: data
            };
        case FILTER_PRODUCTS:
            return { 
                ...state,
                filterType: data.filterValue,
                products: data.newOrder
            };
        default:
            return state;
    }
};