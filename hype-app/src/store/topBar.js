import { createSlice } from "@reduxjs/toolkit";

const topBarSlice = createSlice({
    name: "topBar",
    initialState: { input: "", searchItems: [], watchList: [] },
    reducers: {
        inputChange(state, action) {
            state.input = action.payload;
        },
        searchSubmit(state, action) {
            const filteredArr = action.payload.allData.filter((x) => {
                return x.title
                    ? x.title.toLowerCase().includes(action.payload.searchInput)
                    : x.name.toLowerCase().includes(action.payload.searchInput);
            });
            state.searchItems = filteredArr;
        },
        saveWatchList(state, action) {
            state.watchList = [...state.watchList, action.payload];
            // doesnt work with push??
        },
    },
});

export const topBarActions = topBarSlice.actions;

export default topBarSlice.reducer;
