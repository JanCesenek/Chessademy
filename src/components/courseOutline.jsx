import React from "react";
import classes from "./courseOutline.module.css";
import { ImEnter } from "react-icons/im";

const CourseOutline = (props) => {
  return (
    <div className={classes.Bubble}>
      <div className={classes.ImgContainer}>
        <div className={classes.Background}></div>
        <img src={props.image} alt={props.name} className={classes.Img} />
      </div>
      <div className={classes.Name}>
        <h2>{props.name}</h2>
      </div>
      <div className={classes.Price}>
        <p>{props.price === 0 ? "Free of charge!" : `${props.price}$`}</p>
      </div>
      <div className={classes.Enter}>
        <ImEnter onClick={props.click} size={"2rem"} />
      </div>
    </div>
  );
};

export default CourseOutline;
