export const selectNameFilter = (state) => state.filters.filters.name;
export const selectNumberFilter = (state) => state.filters.filters.number;
export const selectFilterInvalid = (state) =>
  state.filters.filters.invalidFilter;
