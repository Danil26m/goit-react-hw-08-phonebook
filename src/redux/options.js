import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://63b533df9f50390584c31bb0.mockapi.io";
export const fetchTasks = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContacts = createAsyncThunk("contacts/addContact",
 async (contact , thunkAPI)=>{
  try {
    const response = await axios.post("/contacts", {...contact});
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const deleteComponent = createAsyncThunk("contacts/deleteContact", 
async(id, thunkAPI)=>{
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});