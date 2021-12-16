import { configureStore } from "@reduxjs/toolkit";

import topBarReducer from "./topBar";
import mainPgReducer from "./mainPg";

const store = configureStore({
  reducer: {
    topBar: topBarReducer,
    mainPg: mainPgReducer,
  },
});

export default store;
