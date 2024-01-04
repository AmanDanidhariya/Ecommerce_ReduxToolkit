import {createSlice}  from "@reduxjs/toolkit";

export const WishSlice = createSlice({
    name: "wish",
    initialState:{
        cart:[],
        amount:0
    },
    reducers:{
        addToWishList(state, action){
            const productId = action.payload;
            try{
            state.cart.push({
                id: productId.id,
                price: productId.price,
                size: productId.size,
                amount: 1,
                img: productId.img,
                totalPrice: productId.price,
                name: productId.name,
                text: productId.text,
                color: productId.color,
            })}
            catch(err){
                return err;
            }
        }
    }

})