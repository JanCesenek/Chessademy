import React from "react";
import classes from "./errorElement.module.css";
import kurwa from "../imgs/chess-blunder.gif";

const ErrorElement = () => {
  return (
    <div className={classes.ErrorElement}>
      <img src={kurwa} alt="Kurwa" className={classes.Img} />
      <p>Oops, you must have miscalculated something!</p>
    </div>
  );
};

export default ErrorElement;
