// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slice/filter';
import { contactsReducer } from './slice/contact'; 

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer, 
  },
});
