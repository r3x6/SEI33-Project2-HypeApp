import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Navigate, Routes } from "react-router-dom";

import { mainPgActions } from "../store/mainPg";
import Main from "./Main";
import Search from "./Search";
import Profile from "./Profile";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const DashBoard = () => {
  const dispatch = useDispatch();
  const storeAnimeTvData = useSelector((state) => state.mainPg.animeTvData);
  const storeAnimeMovData = useSelector((state) => state.mainPg.animeMovData);
  const storePopMovData = useSelector((state) => state.mainPg.popMovData);
  const storePopTvData = useSelector((state) => state.mainPg.popTvData);

  useEffect(() => {
    const fetchAnime = async (para) => {
      const res = await fetch(
        `https://jikan1.p.rapidapi.com/top/anime/1/${para}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "jikan1.p.rapidapi.com",
            "x-rapidapi-key":
              "12a773075amsh8d41c0d94670d2cp1672adjsna2f437ece9ab",
          },
        }
      );
      const data = await res.json();
      return data.top;
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

    const fetchPopMedia = async (para) => {
      const res = await fetch(
        `https://data-imdb1.p.rapidapi.com/${para}/order/byRating/?page_size=50`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
            "x-rapidapi-key":
              "12a773075amsh8d41c0d94670d2cp1672adjsna2f437ece9ab",
          },
        }
      );
      const data = await res.json();
      return data.results;
    };

    const fetchShows = async (para) => {
      const popArr = await fetchPopMedia(para);
      const movArr = [];
      for (let item of popArr) {
        const res = await fetch(
          `https://data-imdb1.p.rapidapi.com/${para}/id/${item.imdb_id}/`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
              "x-rapidapi-key":
                "12a773075amsh8d41c0d94670d2cp1672adjsna2f437ece9ab",
            },
          }
        );
        const data = await res.json();
        movArr.push(data.results);
      }
      return movArr;
    };

    const handlePopMovData = async () => {
      const receivedData = await fetchShows("movie");
      dispatch(mainPgActions.fetchPopMovData(receivedData));
    };
    handlePopMovData();
    const handlePopTvData = async () => {
      const receivedData = await fetchShows("series");
      dispatch(mainPgActions.fetchPopTvData(receivedData));
    };
    handlePopTvData();
  }, []);

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
              <Route path="/" element={<Navigate replace to="/dashboard" />} />
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
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
