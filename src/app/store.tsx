// reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit'
// redux-persist
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
// redux-thunk
import thunk from 'redux-thunk'
// app files
import contactsReducer from '../features/contacts/contactsSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store);