import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts/contacts';
import filter from './filter/filter';
import authSlice from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authSlice);
export const store = configureStore({
  reducer: {
  contacts: contacts,
  filter: filter,
  auth: persistedReducer,
},
middleware: getDefaultMiddleware =>
getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}),
});
export const persistor = persistStore(store);
