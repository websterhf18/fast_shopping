import { combineReducers } from "redux";
import shopReducer from "./shopReducer";

export default combineReducers({
    shop: shopReducer,
});