// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slice/filter';
import { contactsReducer } from './slice/contact';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);