import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const authSlice = createSlice({
    name:'auth',
    initialState:{
       user: {name: null, email:null},
        token: null,
        isLoggedIn: false, 
    },
    extraReducers:{
        [authOperations.register.fulfilled](state, action){
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [authOperations.login.fulfilled](state, action){
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [authOperations.logout.fulfilled](state){
            state.isLoading = false;
            state.token = null;
            state.isLoggedIn = false;
            state.user = {name:'', email:'',};
        },
        [authOperations.current.fulfilled](state, action){
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.isFetchingCurrentUser = false;
        },
    },
 
})
export default authSlice.reducer;