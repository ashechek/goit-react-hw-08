import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
      number: "",
      invalidFilter: false,
    },
  },
  reducers: {
    changeFilter(state, action) {
      const filterValue = String(action.payload.trim());
      const nameRegex = /^[a-zA-Z]+$/; // Matches only letters
      const numberRegex = /^\d+$/; // Matches only digits
      state.filters.invalidFilter = false;
      if (!filterValue) {
        state.filters.name = "";
        state.filters.number = "";
      } else {
        if (nameRegex.test(filterValue)) {
          state.filters.name = filterValue;
        } else if (numberRegex.test(filterValue)) {
          state.filters.number = filterValue;
        } else {
          state.filters.invalidFilter = true; // Handle invalid input
        }
      }
    },
  },
});

export const filtersSlice = slice.reducer;
export const { changeFilter } = slice.actions;
