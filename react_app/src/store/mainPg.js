import { createSlice } from "@reduxjs/toolkit";

const mainPgSlice = createSlice({
  name: "mainPg",
  initialState: { animeData: [] },
  reducers: {
    fetchAnimeData(state, action) {
      state.animeData = action.payload;
    },
  },
});

export const mainPgActions = mainPgSlice.actions;

export default mainPgSlice.reducer;
