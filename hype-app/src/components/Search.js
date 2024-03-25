import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { topBarActions } from "../store/topBar";

const Search = () => {
    const dispatch = useDispatch();
    const storeSearchItems = useSelector((state) => state.topBar.searchItems);
    const handleWatchList = (e) => {
        const showId = e.target.parentElement.id;
        const show = { ...storeSearchItems[showId] };
        dispatch(topBarActions.saveWatchList(show));
    };
    const params = useParams();

    const searchResults = storeSearchItems.map((x, index) => {
        return (
            <div className="searchResults" id={index} key={index}>
                <a
                    className="searchA"
                    href={x.hasOwnProperty("trailer") ? x.trailer : x.url}
                >
                    <img
                        className="searchImg"
                        src={
                            x.images
                                ? x.images.jpg.image_url
                                : `https://image.tmdb.org/t/p/original/${x.poster_path}`
                        }
                        alt=""
                    />
                    <p className="searchTitle">
                        {x.title}
                        <br />
                        <br />
                        {x.hasOwnProperty("adult")
                            ? "Popularity: " + x.popularity
                            : "Rank: " + x.rank}
                        <br />
                        {x.hasOwnProperty("adult")
                            ? "Average Score " + x.vote_average
                            : "Score: " + x.score}
                        <br />
                        <br />
                        {x.hasOwnProperty("adult")
                            ? "Voters: " + x.vote_count
                            : "Type: " + x.type}
                    </p>
                </a>
                <button onClick={handleWatchList} className="watchListButton">
                    Add to watchlist
                </button>
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
