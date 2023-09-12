import { createSlice } from "@reduxjs/toolkit";
const cartslice=createSlice({
    name:'cartslice',
    initialState:{
        cart:[]
    },reducers:{
        addtocart:(state,action)=>{
            const cartitem=state.cart.find(item => item.id===action.payload)
            if(cartitem){
                cartitem.quantity+=1;
                return;
            }
            state.cart.push({
                quantity:1,
                id:action.payload
            })
        },
        removefromcart:(state,action)=>{
            const cartitem=state.cart.find(item => item.id===action.payload)
            if(cartitem){
                cartitem.quantity-=1;
                if(cartitem.quantity===0){
                    state.cart=state.cart.filter(item => item.id !== action.payload)
                }
            }
        },
        clearcart:(state,action)=>{
            state.cart.length=0;
        }
    }
})
export const{addtocart,removefromcart,clearcart} =cartslice.actions
export default  cartslice.reducer