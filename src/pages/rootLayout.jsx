import React from "react";
import { Outlet } from "react-router-dom";
import { LiaChessSolid } from "react-icons/lia";
import { FaCopyright } from "react-icons/fa";
import classes from "./rootLayout.module.css";
import MainNavigation from "../components/mainNavigation";

const RootLayout = () => {
  return (
    <div className={classes.MainElement}>
      <header className={classes.HeadingWithNav}>
        <div className={classes.Heading}>
          <h1>Chessademy</h1>
          <LiaChessSolid size={"5rem"} />
        </div>
        <MainNavigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={classes.Footer}>
        <FaCopyright />
        <p>2024 | Jan Cesenek | All rights reserved! | Uni project</p>
      </footer>
    </div>
  );
};

export default RootLayout;
