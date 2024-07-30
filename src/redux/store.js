// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slice/filter';
import { contactsReducer } from './slice/contacts'; // Assuming you have contacts reducer

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer, // Add other reducers if needed
  },
});
