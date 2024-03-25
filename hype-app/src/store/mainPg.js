import { createSlice } from "@reduxjs/toolkit";

const mainPgSlice = createSlice({
  name: "mainPg",
  initialState: {
    animeTvData: [],
    animeMovData: [],
    popMovData: [],
    popTvData: [],
  },
  reducers: {
    fetchAnimeTvData(state, action) {
      state.animeTvData = action.payload;
    },
    fetchAnimeMovData(state, action) {
      state.animeMovData = action.payload;
    },
    fetchPopMovData(state, action) {
      state.popMovData = action.payload;
    },
    fetchPopTvData(state, action) {
      state.popTvData = action.payload;
    },
  },
});

export const mainPgActions = mainPgSlice.actions;

export default mainPgSlice.reducer;
