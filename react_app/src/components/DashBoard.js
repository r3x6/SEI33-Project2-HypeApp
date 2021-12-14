import React from "react";
import Main from "./Main";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const DashBoard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <div className="sideBar">
            <div className="title">HYPE</div>
            <SideBar />
          </div>
        </div>
        <div className="col-sm-9">
          <div className="row">
            <TopBar />
          </div>
          <div className="row">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
