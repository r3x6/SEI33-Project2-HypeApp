import React from "react";
import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/dashboard"
          >
            DashBoard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/profile"
          >
            Your Profile{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/settings"
          >
            Settings{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
