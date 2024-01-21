import React from "react";
import classes from "./gameStages.module.css";
import opening from "../imgs/opening.webp";
import middlegame from "../imgs/middlegame.jpg";
import endgame from "../imgs/endgame.png";

const GameStage = () => {
  return (
    <div className={classes.GameStages}>
      <div className={classes.GameStage}>
        <h1>Opening</h1>
        <img src={opening} alt="Opening" className={classes.Img} />
        <p>
          Opening is a phase that occurs during the first 10-15 moves. All best moves for both
          players during this stage of the game have been already researched and there is a plenty
          of books explaining openings and the possible strategy for both white and black. Most
          advanced players play those first moves automatically and don't have to think about what
          to do next.
        </p>
        <h2>Recommended strategy:</h2>
        <p>
          It's usually recommended to fight for the center, create space for your pieces and develop
          them on active squares and at the same time castle ASAP and keep your king safe. You
          usually shouldn't move the same piece twice in the opening if you're not capturing an
          enemy piece or retreating to safety when your piece is being threatened.
        </p>
      </div>
      <div className={classes.GameStage}>
        <h1>Middlegame</h1>
        <img src={middlegame} alt="Middlegame" className={classes.Img} />
        <p>
          Middlegame is a phase that occurs after the first 10-15 moves, usually when all pieces
          have already been developed. As there are more possible variations of chess games than
          observable atoms in the universe, this is where theory fades out and players have to start
          thinking for themselves.
        </p>
        <h2>Recommended strategy:</h2>
        <p>
          It's very hard to determine a general strategy as it entirely depends on the position that
          arose from the opening. You should always have a plan where you wanna play and fight for
          the initiative, either creating an attack on the enemy king or infiltrating the enemy
          position elsewhere.
        </p>
      </div>
      <div className={classes.GameStage}>
        <h1>Endgame</h1>
        <img src={endgame} alt="Endgame" className={classes.Img} />
        <p>
          Endgame happens when either queens or enough pieces get exchanged and kings are safe to
          leave their shelter.
        </p>
        <h2>Recommended strategy:</h2>
        <p>
          Depending on the number of pieces left, generally activate your king to support your
          pawns/other pieces. There are some general rules about different types of endings that can
          be studied by reading books.
        </p>
      </div>
    </div>
  );
};

export default GameStage;
