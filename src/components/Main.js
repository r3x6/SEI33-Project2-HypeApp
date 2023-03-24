import React from "react";
import DisplayBox1 from "./DisplayBox1";
import DisplayBox2 from "./DisplayBox2";

const Main = (props) => {
  return (
    <div className="main">
      <DisplayBox1 data={props.animeTvData} innerTxt="Trending Anime Series" />
      <DisplayBox2 data={props.popTvData} innerTxt="Trending Popular Series" />
      <DisplayBox2 data={props.popMovData} innerTxt="Trending Popular Movies" />
      <DisplayBox1 data={props.animeMovData} innerTxt="Trending Anime Movies" />
    </div>
  );
};

export default Main;
