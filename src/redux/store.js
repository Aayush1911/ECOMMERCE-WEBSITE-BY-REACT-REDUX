import { configureStore } from "@reduxjs/toolkit";
// import messageslice from "./slices/messageslice";
import productslice from "./slices/productslice";
import cartslice from "./slices/cartslice";


export default configureStore({
    reducer:{
        productslice,
        cartslice
    }
})