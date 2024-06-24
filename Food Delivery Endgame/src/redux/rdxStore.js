import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";

const rdxStore=configureStore({
    reducer:{
        cart:cartReducer
    },

});
export default rdxStore;