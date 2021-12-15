import React from "react";

const Anime = (props) => {
  const topAnime = props.animeData.filter((x) => x.rank <= 10);
  const topAnimeList = topAnime.map((x, index) => {
    return (
      <div className="trendingAnime" key={index}>
        <p className="animeRank">Rank: {x.rank}</p>
        <a href={x.url}>
          <img src={x.image_url} alt="" />
          <p className="animeTitle">{x.title}</p>
        </a>
      </div>
    );
  });

  return (
    <div className="anime">
      <div className="animeTop">Trending Anime:</div>
      <div className="animeBot">
        <div className="trendingAnimeBox">{topAnimeList}</div>
      </div>
    </div>
  );
};
export default Anime;
