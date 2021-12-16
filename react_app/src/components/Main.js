import React from "react";
import DisplayBox from "./DisplayBox";

const Main = (props) => {
  return (
    <div className="main">
      <DisplayBox
        animeTvData={props.animeTvData}
        innerTxt="Trending Anime Tv Series"
      />
      <DisplayBox
        animeTvData={props.animeMovData}
        innerTxt="Trending Anime Movies"
      />

      <div className="music">music</div>
      <div className="music">music</div>
    </div>
  );
};

export default Main;
