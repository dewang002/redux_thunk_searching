import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
    name:"cart",
    initialState:{
        cartData:[]
    },
    reducers:{
        addToCart: ( state,action ) => {
           const filtered =  state.cartData.filter( item => item.id === action.payload.id)
           if(!filtered.length){
               state.cartData.push(action.payload)
           }
        },
        deleteCart: ( state,action ) => {
           const newData =  state.cartData.filter( item => item.id !== action.payload)
              state.cartData = newData
        }
    }
})

export const { addToCart,deleteCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;