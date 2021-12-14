import { createSlice } from "@reduxjs/toolkit";

const mainPgSlice = createSlice({
  name: "mainPg",
  initialState: { othername: "" },
  reducers: {
    setOtherName(state, action) {
      state.othername = action.payload;
    },
  },
});

export const mainPgActions = mainPgSlice.actions;

export default mainPgSlice.reducer;
