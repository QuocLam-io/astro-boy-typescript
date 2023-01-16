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
  return (
    <div className="ProgressDisplay">
      <div className="counter-displays">
        <div className="time-left">
          <p>Time Left</p>
          <div className="countdonw"></div>
        </div>
        <div className="errors">
          <p>Errors</p>
          <div className="countdown" >
            
            {incorrectGuesses}/6</div>
        </div>
      </div>
      {isWinner && <div className="winner"></div>}
      {isLoser && <div className="loser"></div>}
      {!isLoser && !isWinner && (
        <div
          className="rocket-progress"
          style={{ backgroundImage: `url(/imgs/fail${incorrectGuesses}.svg)` }}
        ></div>
      )}
    </div>
  );
};

export default ProgressDisplay;
