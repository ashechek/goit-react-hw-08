import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from "./operations";
import { logout } from "../auth/operations";

const handlePending = (state) => {
  state.contacts.loading = true;
};

const handleRejected = (state, action) => {
  state.contacts.loading = false;
  state.contacts.error = action.payload;
};

const slice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [],
      loading: false,
      error: null,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        const updatedContact = action.payload;
        const contactIndex = state.contacts.items.findIndex(
          (item) => item.id === updatedContact.id
        );
        state.contacts.items[contactIndex] = updatedContact;
      })
      .addCase(updateContact.rejected, handleRejected)
      .addCase(logout.fulfilled, (state) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = [];
      });
  },
});

export const contactsSlice = slice.reducer;
