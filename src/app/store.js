import {configureStore} from "@reduxjs/toolkit"
import sliderReducer from "../features/slices/sliderSlice"
import productsReducer from "../features/slices/productSlice"

 const store = configureStore({
    reducer:{
        slider:sliderReducer,
        products: productsReducer,
    }
})
export default store;