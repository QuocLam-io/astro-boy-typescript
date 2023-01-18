import React from "react";

type ProgressDisplayProps = {
  incorrectGuesses: number;
  isLoser: boolean;
  isWinner: boolean;
};

const ProgressDisplay = ({
  incorrectGuesses,
  isLoser,
  isWinner,
}: ProgressDisplayProps) => {
  const newGameText: string[] = [
    "WAY TO GO SPACE COWBOY",
    "WELCOME TO THE COLD EMPTINESS OF SPACE",
  ];

  return (
    <div className="ProgressDisplay">
      <div className="counter-displays">
        <div className="time-left">
          <p>Time Left</p>
          <div className="countdonw"></div>
        </div>
        <div className="errors">
          <p>Errors</p>
          <div className="countdown">{incorrectGuesses}/6</div>
        </div>
      </div>
      {isWinner && (
        <div className="winner rocket">
          <p>{newGameText[0]}</p>
          <div className="new-game">NEW GAME</div>
        </div>
      )}
      {isLoser && (
        <div className="loser rocket">
          <p>{newGameText[1]}</p>

          <div className="new-game lose">NEW GAME</div>
        </div>
      )}
      {!isLoser && !isWinner && (
        <div
          className="rocket-progress rocket"
          style={{ backgroundImage: `url(/imgs/fail${incorrectGuesses}.svg)` }}
        ></div>
      )}
    </div>
  );
};

export default ProgressDisplay;
