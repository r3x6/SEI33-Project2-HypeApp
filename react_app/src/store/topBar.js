import { createSlice } from "@reduxjs/toolkit";

const topBarSlice = createSlice({
  name: "topBar",
  initialState: { input: "", searchItems: [] },
  reducers: {
    inputChange(state, action) {
      state.input = action.payload;
    },
    searchSubmit(state, action) {
      const filteredArr = action.payload.allData.filter((x) =>
        x.title.toLowerCase().includes(action.payload.searchInput)
      );
      console.log(filteredArr);
      state.searchItems = filteredArr;
    },
  },
});

export const topBarActions = topBarSlice.actions;

export default topBarSlice.reducer;
