import React from "react";
import classes from "./courseDetail.module.css";

const CourseDetail = (props) => {
  return (
    <div className={classes.CourseDetail}>
      <h2>{props.name}</h2>
      <h4>{props.price === 0 ? "Free of charge!" : `${props.price}$`}</h4>
      <img src={props.image} alt={props.name} className={classes.Img} />
      <p>{props.description}</p>
      <p onClick={props.back} className={classes.Back}>
        Back
      </p>
    </div>
  );
};

export default CourseDetail;
