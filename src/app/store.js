import {configureStore} from "@reduxjs/toolkit"
import sliderReducer from "../features/slices/sliderSlice"
import productsReducer from "../features/slices/productSlice"
import cartReducer from "../features/slices/cartSlices"
 const store = configureStore({
    reducer:{
        slider:sliderReducer,
        products: productsReducer,
        cart:  cartReducer,
    }
})
export default store;