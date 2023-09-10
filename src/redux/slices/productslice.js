import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchdata=createAsyncThunk('product',async function(){
    const response=await fetch('https://api.escuelajs.co/api/v1/products') 
    return await response.json();
   }
)
const productslice=createSlice({
    name:'productslice',
    initialState:{
        products:[],
        status:'idle',
        error:null
    },
    reducers:{
        loadproducts:(state,action)=>{
            state.products=action.payload
        }
    },
    extraReducers:function (builder) {
        builder.addCase(fetchdata.pending,(state,action)=>{
            state.status='loading'
        }).addCase(fetchdata.fulfilled,(state,action)=>{
            state.products=action.payload;
            state.status='success'
        }).addCase(fetchdata.rejected,(state,action)=>{
            state.status='failed'
            state.error=action.error.message
        })
    }
})
export const {loadproducts}=productslice.actions;

export default productslice.reducer;