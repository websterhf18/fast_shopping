import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopReducer from "./shopReducer";
import { reducer as formReducer } from 'redux-form';

export default persistCombineReducers({
    key: 'root',
    storage,
},{
    shop: shopReducer,
    form: formReducer
});