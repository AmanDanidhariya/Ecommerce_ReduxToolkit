import {createSlice , configureStore} from "@reduxjs/toolkit";
import {sliderData} from "../../assets/data/dummyData"

export const sliderSlice = createSlice({
    name: "slider",
    initialState :{
        value: 0,   
        length:sliderData.length,
    },
    reducers:{
         nextSlide(state, action){
            //slider reached to state.length in that case slide set to the 0th indicating first slide
            //otherwise slider can proceed to the next slide
            state.value = action.payload > state.length -1 ? 0 : action.payload;
         },
         prevSlide(state, action){
            state.value = action.payload < 0 ? state.length : action.payload;
         },
         dotSlide(state,action){
            //for clickable dot 
            const slide= action.payload;
            console.log(slide);
            state.value = slide;
         }
    },
})

export const {nextSlide, prevSlide, dotSlide} = sliderSlice.actions

export default sliderSlice.reducer