import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: { username: "", auth: false },
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

export const sideBarActions = sideBarSlice.actions;

export default sideBarSlice.reducer;
