import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter, selectNumberFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectLoading = (state) => state.contacts.contacts.loading;
export const selectError = (state) => state.contacts.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, nameFilter, numberFilter) => {
    const filteredByName = contacts.filter((data) =>
      data.name.toLowerCase().trim().includes(nameFilter.toLowerCase())
    );
    const filteredByNumber = filteredByName.filter((data) =>
      data.number.trim().includes(numberFilter)
    );
    return filteredByNumber;
  }
);
