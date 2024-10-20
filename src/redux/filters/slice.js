import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
    },
  },
  reducers: {
    changeFilter(state, action) {
      state.filters.name = String(action.payload);
    },
  },
});

export const filtersSlice = slice.reducer;
export const { changeFilter } = slice.actions;
