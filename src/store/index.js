import { configureStore } from "@reduxjs/toolkit";
import CardSlice from './CardSlice'
import authSlice from "./authSlice";

const store = configureStore({
    reducer:{
        cart: CardSlice.reducer,
        auth: authSlice.reducer,
    },
})
export default store