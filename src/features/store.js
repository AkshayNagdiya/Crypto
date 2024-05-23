import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice"
import coinReducer from "./coins/coinSlice"
import cartReducer from "./cart/CartSlice"

const store = configureStore({
    reducer:{
        auth : authReducer,
        coins : coinReducer,
        cart : cartReducer,
    }
});
export default store;