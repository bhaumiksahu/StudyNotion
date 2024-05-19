import { createSlice } from "@reduxjs/toolkit";
//import toast from "react-hot-toast";
const initialState={
    totalItem:localStorage.getItem("totalItem")?JSON.parse(localStorage.getItem("totalItem")):0,
}
const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        settotalItem (value,state){
            state.totalItem=value.payload;
        }
    }
})
export const {settotalItem}=cartSlice.actions;
export default cartSlice.reducer;