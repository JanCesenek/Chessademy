import React from "react";
import classes from "./leaderboard.module.css";

const Leaderboard = () => {
  const maleLeaderboard = [
    {
      standing: 1,
      fullName: "Magnus Carlsen",
      federation: "Norway",
      fideRating: 2830,
      yearOfBirth: 1990,
    },
    {
      standing: 2,
      fullName: "Fabiano Caruana",
      federation: "USA",
      fideRating: 2804,
      yearOfBirth: 1992,
    },
    {
      standing: 3,
      fullName: "Hikaru Nakamura",
      federation: "USA",
      fideRating: 2788,
      yearOfBirth: 1987,
    },
    {
      standing: 4,
      fullName: "Liren Ding",
      federation: "China",
      fideRating: 2775,
      yearOfBirth: 1992,
    },
    {
      standing: 5,
      fullName: "Ian Nepomniachtchi",
      federation: "FIDE",
      fideRating: 2761,
      yearOfBirth: 1990,
    },
    {
      standing: 6,
      fullName: "Alireza Firouzja",
      federation: "France",
      fideRating: 2757,
      yearOfBirth: 2003,
    },
    {
      standing: 7,
      fullName: "Wesley So",
      federation: "USA",
      fideRating: 2757,
      yearOfBirth: 1993,
    },
    {
      standing: 8,
      fullName: "Anish Giri",
      federation: "Netherlands",
      fideRating: 2754,
      yearOfBirth: 1994,
    },
    {
      standing: 9,
      fullName: "Leinier Dominguez Perez",
      federation: "USA",
      fideRating: 2752,
      yearOfBirth: 1983,
    },
    {
      standing: 10,
      fullName: "Sergey Karjakin",
      federation: "Norway",
      fideRating: 2750,
      yearOfBirth: 1990,
    },
  ];
  const femaleLeaderboard = [
    {
      standing: 1,
      fullName: "Yifan Hou",
      federation: "China",
      fideRating: 2632,
      yearOfBirth: 1994,
    },
    {
      standing: 2,
      fullName: "Wenjun Ju",
      federation: "China",
      fideRating: 2558,
      yearOfBirth: 1991,
    },
    {
      standing: 3,
      fullName: "Humpy Koneru",
      federation: "India",
      fideRating: 2554,
      yearOfBirth: 1987,
    },
    {
      standing: 4,
      fullName: "Aleksandra Goryachkina",
      federation: "FIDE",
      fideRating: 2553,
      yearOfBirth: 1998,
    },
    {
      standing: 5,
      fullName: "Tingjie Lei",
      federation: "China",
      fideRating: 2550,
      yearOfBirth: 1997,
    },
    {
      standing: 6,
      fullName: "Kateryna Lagno",
      federation: "FIDE",
      fideRating: 2542,
      yearOfBirth: 1989,
    },
    {
      standing: 7,
      fullName: "Anna Muzychuk",
      federation: "Ukraine",
      fideRating: 2525,
      yearOfBirth: 1990,
    },
    {
      standing: 8,
      fullName: "Zhongyi Tan",
      federation: "China",
      fideRating: 2521,
      yearOfBirth: 1991,
    },
    {
      standing: 9,
      fullName: "Mariya Muzychuk",
      federation: "Ukraine",
      fideRating: 2510,
      yearOfBirth: 1992,
    },
    {
      standing: 10,
      fullName: "Nana Dzagnidze",
      federation: "Georgia",
      fideRating: 2506,
      yearOfBirth: 1987,
    },
  ];

  return (
    <div className={classes.Leaderboard}>
      <h1>Top 10 male players</h1>
      <div className={classes.Table}>
        <div className={classes.TableHeading}>
          <div>Standing</div>
          <div>Full Name</div>
          <div>Federation</div>
          <div>FIDE Rating</div>
          <div>Year Of Birth</div>
        </div>
        {maleLeaderboard?.map((el) => {
          return (
            <div key={el.standing}>
              <div>{el.standing}</div>
              <div>{el.fullName}</div>
              <div>{el.federation}</div>
              <div>{el.fideRating}</div>
              <div>{el.yearOfBirth}</div>
            </div>
          );
        })}
      </div>
      <h1>Top 10 female players</h1>
      <div className={classes.Table}>
        <div className={classes.TableHeading}>
          <div>Standing</div>
          <div>Full Name</div>
          <div>Federation</div>
          <div>FIDE Rating</div>
          <div>Year Of Birth</div>
        </div>
        {femaleLeaderboard?.map((el) => {
          return (
            <div key={el.standing}>
              <div>{el.standing}</div>
              <div>{el.fullName}</div>
              <div>{el.federation}</div>
              <div>{el.fideRating}</div>
              <div>{el.yearOfBirth}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leaderboard;
