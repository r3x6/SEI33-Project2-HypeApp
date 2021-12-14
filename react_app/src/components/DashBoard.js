import React from "react";

const DashBoard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <div className="sideBar">Side Bar</div>
        </div>
        <div className="col-sm-9">
          <div className="row">
            <div className="topBar">Top Bar</div>
          </div>
          <div className="row">
            <div className="main"> Main</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
