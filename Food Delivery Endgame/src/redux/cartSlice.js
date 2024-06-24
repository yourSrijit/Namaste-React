import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
         addItem:(state,action)=>{
            // mutating the state (changing )
            state.items.push(action.payload)
         },
         removeItem:(state)=>{
            state.items.pop();
         },
         clearItem:(state)=>{
            state.items.length=0;
         },
    },
});
// createSlice returns a object 

export const {addItem,removeItem,clearItem}=cartSlice.actions;
export default cartSlice.reducer;