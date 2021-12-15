import React from "react";
import Anime from "./mainComps/Anime";

const Main = (props) => {
  return (
    <div className="main">
      <Anime animeData={props.animeData} />
      <div className="music">music</div>
      <div className="music">music</div>
      <div className="music">music</div>
    </div>
  );
};

export default Main;
