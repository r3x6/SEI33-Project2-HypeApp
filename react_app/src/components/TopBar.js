import React from "react";

const TopBar = () => {
  return (
    <div className="topBar">
      <input
        type="text"
        placeholder="Search for recently trending media...                                                                                        🔍"
      />
      <button type="button">Surprise Me!</button>
    </div>
  );
};

export default TopBar;
