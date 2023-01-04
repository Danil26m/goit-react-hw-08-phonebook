import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts';
import filter from './filter';


export const store = configureStore({
  reducer: {
  contacts: contacts,
  filter: filter,
}});
