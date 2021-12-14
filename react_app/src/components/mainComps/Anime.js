import React from "react";

const Anime = (props) => {
  const topAnime = props.animeData.filter((x) => x.rank <= 5);
  const topAnimeList = topAnime.map((x, index) => {
    return (
      <li className="trendingAnime" key={index}>
        {x.title}
      </li>
    );
  });

  return (
    <div>
      <div> Currently Trending Anime:</div>
      <ol>{topAnimeList}</ol>
    </div>
  );
};
export default Anime;
