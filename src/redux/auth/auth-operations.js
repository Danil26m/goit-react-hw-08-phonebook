import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token ={
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(){
        axios.defaults.headers.common.Authorization ="";
    },
};

const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI)=>{
        console.log(thunkAPI);
        try {
            const {data}= await axios.post('/users/signup', user);
            console.log(data.token);
            token.set(data.token);
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

const login = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI)=>{
        try {
            const {data} = await axios.post('/users/login', user);
            token.set(data.token);
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

const logout = createAsyncThunk(
    'auth/logout',
    async(_, thunkAPI)=>{
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

const current = createAsyncThunk(
    'auth/current',
    async(_, thunkAPI)=>{
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (!persistedToken) {
            return thunkAPI.rejectWithValue();
        }
        token.set(persistedToken);
        try {
            const {data} = await axios.get('/users/current');
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);
const authOperations = {
    register,
    login,
    logout,
    current,
};

export default authOperations;