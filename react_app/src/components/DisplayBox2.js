import React from "react";

const DisplayBox2 = (props) => {
  const top = props.data.filter((x, index) => index <= 10);
  let topList = top.map((x, index) => {
    return (
      <div className="trending" key={index}>
        <p className="rank">Rating: {x.rating}</p>
        <a href={x.trailer}>
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
        {props.data.length < 1 ? (
          <div className="centered">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="trendingBox">{topList}</div>
        )}
      </div>
    </div>
  );
};
export default DisplayBox2;
