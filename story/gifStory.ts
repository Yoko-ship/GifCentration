import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface Item{
    item:object[],
    isOpen:boolean
}
const initialState:Item = {
    item:[],
    isOpen:false
}
export const gifStory = createSlice({
    name:"gifs",
    initialState,
    reducers:{
        addContent(state,action){
            state.item.push(action.payload)
        },
        openHanlder(state,action){
            state.isOpen = action.payload
        },
    }
})

export const {addContent} = gifStory.actions
export const { openHanlder } = gifStory.actions;
export default gifStory.reducer