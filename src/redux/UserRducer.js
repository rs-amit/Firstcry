import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers:{
        loginStart:(state)=>{
          state.isFetching = true;
          state.error= false
        },
        loginSuccess:(state,action)=>{
            console.log(action.payload)
            state.isFetching = false;
            state.currentUser =  action.payload
        },
        loginFailure:(state)=>{
            state.isFetching = false;
            state.error = true
        },
        logout:(state)=>{
            state.isFetching = false;
            state.currentUser = null;
            state.error = false;
        },
    }
})

export const {loginStart, loginSuccess, loginFailure, logout} = userSlice.actions
export default userSlice.reducer