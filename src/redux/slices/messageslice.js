import { createSlice } from "@reduxjs/toolkit";

const messsageslice=createSlice({
    name:'messageslice',
    initialState:{
        message:''
    },
    reducers:{
        setmessage:(state,action)=>{
            state.message=action.payload;
        },
        resetmessage:(state,action)=>{
            state.message='';
        }
    }
})

export default messsageslice.reducer;

export const {setmessage,resetmessage}=messsageslice.actions;