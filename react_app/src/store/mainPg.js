import { createSlice } from "@reduxjs/toolkit";

const mainPgSlice = createSlice({
  name: "mainPg",
  initialState: { animeData: [], musicData: [] },
  reducers: {
    fetchAnimeData(state, action) {
      state.animeData = action.payload;
    },
    fetchMusicData(state, action) {
      state.musicData = action.payload;
    },
  },
});

export const mainPgActions = mainPgSlice.actions;

export default mainPgSlice.reducer;
