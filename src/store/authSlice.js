import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{ isLogin : false, userName:''},
    reducers:{
        login(state,action){
            state.isLogin = true
            state.userName = action.payload.userName
        },
        logout(state){
            state.isLogin = false
            state.userName = ''
        },
    },
})

export const authActions = authSlice.actions
export default authSlice