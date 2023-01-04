import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts';
import filter from './filter';
import authSlice from './auth/auth-slice';


export const store = configureStore({
  reducer: {
  contacts: contacts,
  filter: filter,
  auth: authSlice,
}});
