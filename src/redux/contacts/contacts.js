import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks,addContacts,deleteComponent } from '../options/options';

const contacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers:{
  
    [fetchTasks.fulfilled](state,action){
        state.isLoading= false;
        state.error = null;
        state.items = action.payload;
    },
        [addContacts.fulfilled](state, action){
            state.isLoading= false;
            state.error = null;
            state.items.push(action.payload);
            },   
            [deleteComponent.fulfilled](state, action){
                state.isLoading= false;
                state.error = null;
                const num = state.items.findIndex(
                  contact => contact.id === action.payload.id
                );
                state.items.splice(num,1);
            },
  },
});
export default contacts.reducer;
