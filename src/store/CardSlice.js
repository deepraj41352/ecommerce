import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name:'cart',
    initialState:{
        itemsList:[],
        totalQuantity:0,
    },
    reducers:{
        addToCard(state,action){
            const newItem = action.payload

            //check Item is already exits
            const exitsItem = state.itemsList.find((item) => item.id === newItem.id)

            if(exitsItem){
                exitsItem.quantity++
                exitsItem.totalPrice += newItem.price
            }else{
                state.itemsList.push({
                    id:newItem.id,
                    name:newItem.name,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    cover:newItem.cover
            })
            state.totalQuantity++
            }
        },
        removeFromCart(state, action) {
      const id = action.payload
      const exitstingItem = state.itemsList.find((item) => item.id === id)
      if (exitstingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id)
        state.totalQuantity--
      } else {
        exitstingItem.quantity--
        exitstingItem.totalPrice -= exitstingItem.price
      }
    },
    removeCart(state, action) {
      const id = action.payload
      state.itemsList = state.itemsList.filter((item) => item.id !== id)
      state.totalQuantity--
    },
  },
})

export const cartActions = cardSlice.actions
export default cardSlice