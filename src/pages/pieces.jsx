import React from "react";
import classes from "./pieces.module.css";
import pawnMovement from "../imgs/pawnMovement.gif";
import enPassantMovement from "../imgs/enPassantMovement.gif";
import knightMovement from "../imgs/knightMovement.gif";
import bishopMovement from "../imgs/bishopMovement.gif";
import rookMovement from "../imgs/rookMovement.gif";
import queenMovement from "../imgs/queenMovement.gif";
import kingMovement from "../imgs/kingMovement.gif";
import castleMovement from "../imgs/castleMovement.gif";

const Pieces = () => {
  return (
    <div className={classes.Pieces}>
      <div className={classes.Piece}>
        <h1>Pawn</h1>
        <img src={pawnMovement} alt="Pawn movement" className={classes.Img} />
        <h2>Value: 1 point</h2>
        <p>
          Pawn can move either one or two fields forward, two fields only if he hasn't moved yet
          (see the green dots). If there is an enemy piece in front of him one field diagonally, he
          can capture it (see the red dots). Pawn is the only piece in the game that has a separate
          rule for moving and capturing.
        </p>
        <p>
          Pawns are the weakest pieces at the start of the game, but become significantly stronger
          in the endgame, as when a pawn reaches the last rank (8th for white, 1st for black), it
          can promote to a queen/rook/bishop/knight.
        </p>
        <h3>Best position for pawns:</h3>
        <p>
          Pawns are the "spine" of the position and define if the position is opened or closed.{" "}
          <br /> In the opening, use your central pawns to fight for the center of the board - you
          should generally avoid pushing your pawns that shelter your king. <br />
          In the middlegame, push your pawns to fight for space where you want to play (queenside,
          kingside or center). If there are opposite-side castles, use your pawns to break the
          enemy's king shelter (in some cases, it can also be done with same-side castles, but
          that's not recommended for beginners). <br />
          In the endgame, pawns should usually race to the last rank ASAP. Support your pawns with
          other pieces and push them all the way to win the game!
        </p>
        <h2>En passant:</h2>
        <img src={enPassantMovement} alt="En passant movement" className={classes.Img} />
        <p>
          On the picture above is a special rule for pawns called "en passant". If an enemy pawn
          takes two steps forward and skips a field where you could have taken him, you can capture
          him anyway by moving to that field as seen on the picture.
        </p>
      </div>
      <div className={classes.Piece}>
        <h1>Knight</h1>
        <img src={knightMovement} alt="Knight movement" className={classes.Img} />
        <h2>Value: 3 points</h2>
        <p>
          Knights have a very special movement. They move in "L" shapes - two fields horizontally
          and one field vertically or vice versa (see the green dots). They are the only piece who
          can jump over other pieces, so it can't be blocked, unless pinned.
        </p>
        <h3>Best position for knights:</h3>
        <p>
          Knights excel in closed positions (that's when both players' pawns are blocking each other
          preventing movement for most pieces closing the position). <br /> In the opening, knights
          should be the first pieces after pawns that you develop. <br />
          In the middlegame, knights are best placed in "outposts". Outpost is a field usually in
          enemy's half that's protected by your pawn. Best outpost is a one where enemy's light
          pieces (bishop or knight) can't reach so the knight is limiting movement of enemy's pieces
          and can't be exchanged.
        </p>
      </div>
      <div className={classes.Piece}>
        <h1>Bishop</h1>
        <img src={bishopMovement} alt="Bishop movement" className={classes.Img} />
        <h2>Value: 3 points</h2>
        <p>
          Bishops can move an unlimited squares diagonally in any direction. They are the only piece
          in the game that's limited to either light or dark squares.
        </p>
        <h3>Best position for bishops:</h3>
        <p>
          Bishops excel in opened positions (that's when no pawns are blocking each other leaving
          the center open). <br /> In the opening, bishops should be placed on a safe square where
          they control the most fields (ideally near the center). <br />
          In the middlegame, nothing really changes. Always place your bishop on safe active
          squares.
        </p>
      </div>
      <div className={classes.Piece}>
        <h1>Rook</h1>
        <img src={rookMovement} alt="Rook movement" className={classes.Img} />
        <h2>Value: 5 points</h2>
        <p>Rooks can move an unlimited squares horizontally/vertaically in any direction.</p>
        <h3>Best position for rooks:</h3>
        <p>
          Rooks should be always placed on opened files that are not obstructed, if possible. <br />{" "}
          In the opening, rooks are developed last. They have one special movement paired with the
          king called castle that'll be mentioned in the king movement. <br />
          In the middlegame, rooks come into play by moving on opened files. They are good at
          putting long-range pressure from the back rank.
        </p>
      </div>
      <div className={classes.Piece}>
        <h1>Queen</h1>
        <img src={queenMovement} alt="Queen movement" className={classes.Img} />
        <h2>Value: 9 points</h2>
        <p>Queen is the strongest piece in the game. It moves as a rook and bishop combined.</p>
        <h3>Best position for queens:</h3>
        <p>
          Queens should be placed on active safe squares where they put pressure on enemy pieces.{" "}
          <br />
          In the opening, develop your queen after knights and bishops. Don't be too aggressive with
          it, as you have only one queen and it can be easily trapped and captured if you're not
          careful. <br /> In the middlegame, queen is the strongest attacking piece creating the
          deadliest mating nets.
        </p>
      </div>
      <div className={classes.Piece}>
        <h1>King</h1>
        <img src={kingMovement} alt="King movement" className={classes.Img} />
        <h2>Value: invaluable</h2>
        <p>
          King is the most important piece of the game. Moves like a queen, but only one square in
          any direction. Can't be captured, but when threatened, you are put in check and if you
          can't escape the check (capturing the checking piece, blocking the path or stepping
          aside), you are checkmated losing the game.
        </p>
        <h2>Castle:</h2>
        <img src={castleMovement} alt="Castle movement" className={classes.Img} />
        <p>
          Special movement for king and a rook. Possible only if the king nor the rook haven't moved
          yet, the king is not in check and the king wouldn't be stepping into check or skipping
          over a field threatened by an enemy piece. You can castle in either direction, king always
          steps two squares left/right and the rook moves over him (see picture above).
        </p>
        <h3>Best position for a king:</h3>
        <p>
          Kings should stay in the back rank sheltered by pawns and other pieces until enough pieces
          get exchanged. <br />
          In the opening, try to castle ASAP and don't move your king, keep it in the safe corner.
          Same applies to the middlegame. <br /> In the endgame, there usually isn't enough pieces
          to directly checkmate you. Activate your king and support your pawns/other remaining
          pieces.
        </p>
      </div>
    </div>
  );
};

export default Pieces;
