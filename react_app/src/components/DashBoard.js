import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { mainPgActions } from "../store/mainPg";
import Main from "./Main";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const DashBoard = () => {
  const dispatch = useDispatch();
  const storeAnimeTvData = useSelector((state) => state.mainPg.animeTvData);
  const storeAnimeMovData = useSelector((state) => state.mainPg.animeMovData);

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
            <Main
              animeTvData={storeAnimeTvData}
              animeMovData={storeAnimeMovData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
