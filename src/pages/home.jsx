import React, { useState } from "react";
import classes from "./home.module.css";
import { Link } from "react-router-dom";
import CourseDetail from "../components/courseDetail";
import CourseOutline from "../components/courseOutline";
import stockfish from "../imgs/stockfish.jpg";
import chessCourse01 from "../imgs/chessCourse_01.webp";
import chessCourse02 from "../imgs/chessCourse_02.webp";
import chessCourse03 from "../imgs/chessCourse_03.webp";
import chessCourse04 from "../imgs/chessCourse_04.png";
import chessCourse05 from "../imgs/chessCourse_05.png";
import chessCourse06 from "../imgs/chessCourse_06.png";

const Home = () => {
  const [detail, setDetail] = useState(false);
  const [courses, setCourses] = useState(false);

  const courseList = [
    {
      id: 1,
      name: "English opening",
      price: 9.99,
      image: chessCourse01,
      description:
        "In this course, we will dive into the English opening in detail, exploring all nuances for white and strongest responses for black.",
    },
    {
      id: 2,
      name: "Endgame course",
      price: 0,
      image: chessCourse02,
      description:
        "In this course, we will thoroughly explain the basic fundamentals of endgames. Do you struggle with making decisions after multiple pieces get exchanged and you can no longer directly checkmate the enemy king? Then this course is for you!",
    },
    {
      id: 3,
      name: "Opposite castles",
      price: 19.99,
      image: chessCourse03,
      description:
        "In this course, we will dive into the essential principles of opposite castling, teaching you how to simultaneously attack the enemy king and defend your own.",
    },
    {
      id: 4,
      name: "Mating patterns",
      price: 0,
      image: chessCourse04,
      description:
        "This is not really a course, just a list of 1000 puzzles with solutions that sharpen your tactical skills. Free of charge!",
    },
    {
      id: 5,
      name: "Positional thinking",
      price: 4.99,
      image: chessCourse05,
      description:
        "This is not really a course, just a list of 100 puzzles challenging your positional thinking with deep explanations",
    },
    {
      id: 6,
      name: "Sicilian Defense",
      price: 14.99,
      image: chessCourse06,
      description:
        "By far the most frequent response for 1. e4 in modern history. Let's dife deeper into why it is so popular!",
    },
  ];

  return detail ? (
    <CourseDetail
      id={detail?.id}
      name={detail?.name}
      price={detail?.price}
      image={detail?.image}
      description={detail?.description}
      back={() => setDetail(false)}
    />
  ) : (
    <div className={classes.Home}>
      <div className={classes.Img}>
        <img src={stockfish} alt="Stockfish AI" />
      </div>
      <p>
        Welcome to our website! Allow me to introduce myself. My name is Stockfish, currently the
        strongest chess AI in the world and the face of this company.
      </p>
      <p>
        Chessademy explains basic rules of the game,{" "}
        <Link to="/pieces">how to move your pieces</Link> as well as{" "}
        <Link to="/gameStage">respective stages of the game</Link>.
      </p>
      <p>
        You can also look at the most recent <Link to="/leaderboard">leaderboard</Link> of top chess
        male and female players.
      </p>
      <p>
        Contact information as where to find us or reach us (as well as a form allowing you to
        submit any requests our team will do their best to reply to within 2-3 business days) can be
        found <Link to="/contact">here</Link>.
      </p>
      <p>
        Last but not least, scroll down/click <span onClick={() => setCourses(!courses)}>here</span>{" "}
        to find a list of our courses, some are free, some for a small fee.
      </p>
      {courses && (
        <div className={classes.CourseList}>
          {courseList?.map((el) => {
            return (
              <CourseOutline
                key={el.id}
                name={el.name}
                price={el.price}
                image={el.image}
                click={() => setDetail(el)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
