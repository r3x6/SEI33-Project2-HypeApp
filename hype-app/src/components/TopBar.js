import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { topBarActions } from "../store/topBar";
import { NavLink } from "react-router-dom";

const TopBar = () => {
    const dispatch = useDispatch();
    const storeAnimeTvData = useSelector((state) => state.mainPg.animeTvData);
    const storeAnimeMovData = useSelector((state) => state.mainPg.animeMovData);
    const storePopMovData = useSelector((state) => state.mainPg.popMovData);
    const storePopTvData = useSelector((state) => state.mainPg.popTvData);
    const storeSearchInput = useSelector((state) => state.topBar.input);

    const handleInputChange = (e) => {
        const receivedData = e.target.value;
        dispatch(topBarActions.inputChange(receivedData));
    };

    const handleSearchSubmit = () => {
        const allData = [
            ...storeAnimeMovData,
            ...storeAnimeTvData,
            ...storePopMovData,
            ...storePopTvData,
        ];
        document.querySelector("input").value = "";
        const payload = { searchInput: storeSearchInput, allData: allData };
        dispatch(topBarActions.searchSubmit(payload));
    };

    return (
        <div className="topBar">
            <input
                type="text"
                placeholder="Search for recently trending media...  🔍"
                onChange={handleInputChange}
            />
            <NavLink className="buttonNav" to={"/search/" + storeSearchInput}>
                <button type="button" onClick={handleSearchSubmit}>
                    Search
                </button>
            </NavLink>
        </div>
    );
};

export default TopBar;
