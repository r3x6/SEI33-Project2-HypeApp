import React from "react";
import Anime from "./mainComps/Anime";

const Main = (props) => {
  return (
    <div className="main">
      <div className="anime">
        <Anime animeData={props.animeData} />
      </div>
      <div className="music">music</div>
    </div>
  );
};

export default Main;
