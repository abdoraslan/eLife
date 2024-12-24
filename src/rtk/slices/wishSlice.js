import { createSlice } from "@reduxjs/toolkit"

export const wishSlice = createSlice({
    initialState:[],
    name : "wishSlice",
    reducers : {
        addWish : (state,action)=>{
            const product = state.find((product)=>product.id === action.payload.id)
            if(!product){
              return [...state, action.payload];
            }
            return state
        },
        deleteWish : (state,action)=> {
            return state.filter((product)=> product.id !== action.payload.id)
         }
    }
})

export const {addWish,deleteWish} = wishSlice.actions
export default wishSlice.reducer