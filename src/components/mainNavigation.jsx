import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./mainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav className={classes.Nav}>
      <NavLink className={({ isActive }) => (isActive ? classes.ActiveMenu : "")} to={"/"} end>
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.ActiveMenu : "")}
        to={"/pieces"}
        end>
        Pieces
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.ActiveMenu : "")}
        to={"/gameStages"}
        end>
        Game stages
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.ActiveMenu : "")}
        to={"/leaderboard"}
        end>
        Leaderboard
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.ActiveMenu : "")}
        to={"/contact"}
        end>
        Contact
      </NavLink>
    </nav>
  );
};

export default MainNavigation;
