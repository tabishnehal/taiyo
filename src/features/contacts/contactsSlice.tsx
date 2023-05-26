// reduxjs/toolkit
import { createSlice } from '@reduxjs/toolkit'

// inittialstate
const initialState = {
  contacts: [],
}

// contactslice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    contactAdded(state, action) {
      (state.contacts as any[]).push(action.payload);
    },
    contactEdited(state, action) {
      const { id, firstName, lastName, isActive } = action.payload;
      const existingContact: any = selectContactById(state, id);
      if (existingContact) {
        existingContact.firstName = firstName;
        existingContact.lastName = lastName;
        existingContact.isActive = isActive;
      }
    },
    contactDeleted(state, action) {
      const { id } = action.payload;
      const existingContact = selectContactById(state, id);
      if (existingContact) {
        const index = (state.contacts as any[]).indexOf(existingContact);
        state.contacts.splice(index, 1);
      }
    },
  }
})

export const { contactAdded, contactEdited, contactDeleted } = contactsSlice.actions;

export default contactsSlice.reducer;

// allcontacts
export const selectAllContacts = (state: any) => state.contacts;

// contactbyid
export const selectContactById = (state: any, contactId: any) =>
  state.contacts.find((contact: any) => contact.id === contactId);