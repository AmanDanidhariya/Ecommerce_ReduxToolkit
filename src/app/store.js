import {configureStore} from "@reduxjs/toolkit"
import sliderReducer from "../features/slices/sliderSlice"

 const store = configureStore({
    reducer:{
        slider:sliderReducer,
    }
})
export default store;