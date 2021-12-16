import { createSlice } from "@reduxjs/toolkit";

const mainPgSlice = createSlice({
  name: "mainPg",
  initialState: { animeTvData: [], animeMovData: [] },
  reducers: {
    fetchAnimeTvData(state, action) {
      state.animeTvData = action.payload;
    },
    fetchAnimeMovData(state, action) {
      state.animeMovData = action.payload;
    },
  },
});

export const mainPgActions = mainPgSlice.actions;

export default mainPgSlice.reducer;
