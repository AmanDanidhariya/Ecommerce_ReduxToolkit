import {configureStore} from "@reduxjs/toolkit"
import sliderReducer from "../features/slices/sliderSlice"
import productsReducer from "../features/slices/productSlice"
import cartReducer from "../features/slices/cartSlices"
import authReducer from "../features/slices/authSlice"

 const store = configureStore({
    reducer:{
        slider:sliderReducer,
        products: productsReducer,
        cart:  cartReducer,
        user: authReducer, 
    }
})
export default store;