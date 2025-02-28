import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './user/slice'
import addToCartReducer from "./addToCart/slice";

const rootReducer = combineReducers({
    user : userReducer,
    cart : addToCartReducer
})

export default rootReducer;