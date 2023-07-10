import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    //get item from session storage
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        //if NavigationButtonType === product.type return all those product
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
        console.log("filter", filter);
        //storing in session storage
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
        
      } catch (err) {
        return err;
      }
    },
  },
});

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;
