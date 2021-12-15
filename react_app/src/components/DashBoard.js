import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { mainPgActions } from "../store/mainPg";
import Main from "./Main";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const DashBoard = () => {
  const dispatch = useDispatch();
  const storeAnimeData = useSelector((state) => state.mainPg.animeData);

  useEffect(() => {
    const fetchAnime = async () => {
      const res = await fetch(
        "https://jikan1.p.rapidapi.com/top/anime/1/airing",
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
    const handleAnimeData = async () => {
      const receivedData = await fetchAnime();
      dispatch(mainPgActions.fetchAnimeData(receivedData));
    };
    handleAnimeData();

    // const fetchMusic = async () => {
    //   const res = await fetch("https://api.deezer.com/chart");
    //   const data = await res.json();
    //   console.log(data);
    //   return data.top;
    // };
    // const handleMusicData = async () => {
    //   const receivedData = await fetchMusic();
    //   dispatch(mainPgActions.fetchMusicData(receivedData));
    // };
    // handleMusicData();
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
            <Main animeData={storeAnimeData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
