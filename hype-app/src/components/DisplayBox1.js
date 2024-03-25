import React from "react";

const DisplayBox1 = (props) => {
    const top = props.data.filter((x, i) => i < 10);
    let topList = top.map((x, index) => {
        return (
            <div className="trending">
                <p className="rank">Rank: {x.rank ? x.rank : x.popularity}</p>
                <a href={x.url}>
                    <img
                        src={
                            x.images
                                ? x.images.jpg.image_url
                                : `https://image.tmdb.org/t/p/original/${x.poster_path}`
                        }
                        alt=""
                    />
                    <p className="trendingTitle">{x.name ? x.name : x.title}</p>
                </a>
            </div>
        );
    });
    for (let i = 0; i < 3; i++) {
        topList = [...topList, ...topList];
    }

    return (
        <div className="displayBox">
            <div className="boxTop">{props.innerTxt}</div>
            <div className="boxBot">
                <div className="trendingBox">{topList}</div>
            </div>
        </div>
    );
};
export default DisplayBox1;
