import { configureStore } from "@reduxjs/toolkit";

import topBarReducer from "./topBar";
import sideBarReducer from "./sideBar";
import mainPgReducer from "./mainPg";

const store = configureStore({
  reducer: {
    topBar: topBarReducer,
    sideBar: sideBarReducer,
    mainPg: mainPgReducer,
  },
});

export default store;
