// reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';

// app files
import contactsReducer from '../features/contacts/contactsSlice';

// store
export const store = configureStore({
  reducer: contactsReducer,
})