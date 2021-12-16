import React from "react";

const DisplayBox1 = (props) => {
  const top = props.data.filter((x) => x.rank <= 11);
  let topList = top.map((x, index) => {
    return (
      <div className="trending" key={index}>
        <p className="rank">Rank: {x.rank}</p>
        <a href={x.url}>
          <img src={x.image_url} alt="" />
          <p className="trendingTitle">{x.title}</p>
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
