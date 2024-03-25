import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Navigate, Routes } from "react-router-dom";

import { mainPgActions } from "../store/mainPg";
import Main from "./Main";
import Search from "./Search";
import Profile from "./Profile";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Settings from "./Settings";

const DashBoard = () => {
    const dispatch = useDispatch();
    const storeAnimeTvData = useSelector((state) => state.mainPg.animeTvData);
    const storeAnimeMovData = useSelector((state) => state.mainPg.animeMovData);
    const storePopMovData = useSelector((state) => state.mainPg.popMovData);
    const storePopTvData = useSelector((state) => state.mainPg.popTvData);

    useEffect(() => {
        const fetchAnime = async (para) => {
            const res = await fetch(
                `https://api.jikan.moe/v4/top/anime?type=${para}`,
                {
                    method: "GET",
                }
            );
            const data = await res.json();
            return data.data;
        };

        const handleAnimeTvData = async () => {
            const receivedData = await fetchAnime("tv");
            dispatch(mainPgActions.fetchAnimeTvData(receivedData));
        };
        handleAnimeTvData();

        const handleAnimeMovData = async () => {
            const receivedData = await fetchAnime("movie");
            dispatch(mainPgActions.fetchAnimeMovData(receivedData));
        };
        handleAnimeMovData();

        const fetchShows = async (para) => {
            const res = await fetch(
                `https://api.themoviedb.org/3/${para}//top_rated?language=en-US&page=1`,
                {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmQ4OGE2ZWJlZjI4YmExZGQ3YjNmOGI2NGVmZWE4OCIsInN1YiI6IjY1ZjE1N2MzMDZmOTg0MDE4NTQzYmEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iPTmc82iaudY4VtQ6M0SjHniBQ1-0Lav-B3RfeLAQ1s",
                    },
                }
            );
            const data = await res.json();
            return data.results;
        };

        // const fetchShows = async (para) => {
        //     const popArr = await fetchPopMedia(para);
        //     const movArr = [];
        //     for (let item of popArr) {
        //         const res = await fetch(
        //             `https://data-imdb1.p.rapidapi.com/${para}/id/${item.imdb_id}/`,
        //             {
        //                 method: "GET",
        //                 headers: {
        //                     "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        //                     "x-rapidapi-key":
        //                         "12a773075amsh8d41c0d94670d2cp1672adjsna2f437ece9ab",
        //                 },
        //             }
        //         );
        //         const data = await res.json();
        //         movArr.push(data.results);
        //     }
        //     return movArr;
        // };

        const handlePopMovData = async () => {
            const receivedData = await fetchShows("movie");
            dispatch(mainPgActions.fetchPopMovData(receivedData));
        };
        handlePopMovData();

        const handlePopTvData = async () => {
            const receivedData = await fetchShows("tv");
            dispatch(mainPgActions.fetchPopTvData(receivedData));
        };
        handlePopTvData();
    }, []);

    console.log(storePopTvData);
    console.log(storePopMovData);
    console.log(storeAnimeMovData);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="sideBar">
                        <div className="title">HYPE</div>
                        <SideBar />
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="row">
                        <TopBar />
                    </div>
                    <div className="row">
                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate replace to="/dashboard" />}
                            />
                            <Route
                                path="/dashboard"
                                element={
                                    <Main
                                        animeTvData={storeAnimeTvData}
                                        animeMovData={storeAnimeMovData}
                                        popMovData={storePopMovData}
                                        popTvData={storePopTvData}
                                    />
                                }
                            />
                            <Route path="/search/:item" element={<Search />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
