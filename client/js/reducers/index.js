import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopReducer from "./shopReducer";

export default persistCombineReducers({
    key: 'root',
    storage,
},{
    shop: shopReducer
});