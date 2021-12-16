import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Search = () => {
  const params = useParams();
  const storeSearchItems = useSelector((state) => state.topBar.searchItems);
  const searchResults = storeSearchItems.map((x, index) => {
    return (
      <div className="searchResults" key={index}>
        <a
          className="searchA"
          href={x.hasOwnProperty("trailer") ? x.trailer : x.url}
        >
          <img className="searchImg" src={x.image_url} alt="" />
          <p className="searchTitle">
            {x.title}
            <br />
            <br />
            {x.hasOwnProperty("rating")
              ? "Rating: " + x.rating
              : "Rank: " + x.rank}
            <br />
            {x.hasOwnProperty("rating")
              ? "Popularity: " + x.popularity
              : "Score: " + x.score}
            <br />
            <br />
            {"Type: " + x.type}
          </p>
        </a>
      </div>
    );
  });
  return (
    <div className="searchContainer">
      <p className="searchPara"> Search results for "{params.item}" :</p>
      {storeSearchItems.length < 1 ? (
        <h1>
          No results found.
          <br /> Try refining your search term.
        </h1>
      ) : (
        searchResults
      )}
    </div>
  );
};
export default Search;
