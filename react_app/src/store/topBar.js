import { createSlice } from "@reduxjs/toolkit";

const topBarSlice = createSlice({
  name: "topBar",
  initialState: { input: "", searchItems: [] },
  reducers: {
    login(state, action) {
      state.username = action.payload;
      state.auth = true;
    },
    logout(state) {
      state.username = "";
      state.auth = false;
    },
  },
});

export const topBarActions = topBarSlice.actions;

export default topBarSlice.reducer;
