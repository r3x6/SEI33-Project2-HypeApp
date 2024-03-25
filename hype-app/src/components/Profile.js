import React from "react";
import { useSelector } from "react-redux";
import DisplayBox1 from "./DisplayBox1";

const Profile = () => {
  const storeWatchListData = useSelector((state) => state.topBar.watchList);

  return (
    <div className="profile">
      <div className="profilePic">Profile Pic</div>
      <div className="bioData">Bio Data</div>
      <div className="mediaData">
        <DisplayBox1 data={storeWatchListData} innerTxt="Your WatchList" />
      </div>
    </div>
  );
};
export default Profile;
