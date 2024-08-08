import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import { filterReducer } from './slice/filter';
import { contactsReducer } from './slice/contact';

const persistConfig = {
  key: 'root', // This is the key for the persisted state
  storage,
};

// Combine reducers into a rootReducer
const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Create persistor to manage the persisted state
export const persistor = persistStore(store);
