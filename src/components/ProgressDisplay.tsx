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
      <div className="counter-displays"></div>
      <div
        className="rocket-display"
        {...(!isLoser &&
          !isWinner && {
            style: {
              backgroundImage: `url(/imgs/fail${incorrectGuesses}.svg)`,
            },
          })}
        // {...(isWinner && {
        //   style: { backgroundImage: `url(/imgs/failWin.gif)` },
        // })}
        // {...(isLoser && {
        //   style: { backgroundImage: `url(/imgs/failLose.gif)` },
        // })}
      ></div>
      {/* <img src={`/public/imgs/fail${incorrectGuesses}.svg`} alt="Rocket" /> */}
    </div>
  );
};

export default ProgressDisplay;
