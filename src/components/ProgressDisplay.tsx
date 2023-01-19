import React, { useEffect } from "react";
import axios from "axios";

type ProgressDisplayProps = {
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  incorrectGuesses: number;
  isLoser: boolean;
  isWinner: boolean;
  getRandomWord: () => void;
  randomWord: string;
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  startGame: boolean;
  seconds: number;
};

const ProgressDisplay = ({
  startGame,
  incorrectGuesses,
  isLoser,
  isWinner,
  getRandomWord,
  randomWord,
  setGuessedLetters,
  seconds,
  setSeconds,
}: ProgressDisplayProps) => {
  //Win Lose Text
  const newGameText: string[] = [
    "WAY TO GO SPACE COWBOY",
    "WELCOME TO THE COLD EMPTINESS OF SPACE",
  ];

  //Timer
  let minutes = Math.floor(seconds / 60);
  let secondsLeft: number | string = seconds % 60;
  if (secondsLeft < 10) {
    secondsLeft = `0${secondsLeft}`;
  }

  return (
    <div className="ProgressDisplay">
      <div className="counter-displays">
        <div className="time-left">
          <p>Time Left</p>
          <div className="countdown">{minutes}:{secondsLeft} </div>
        </div>
        <div className="errors">
          <p>Errors</p>
          <div className="countdown">{incorrectGuesses}/6</div>
        </div>
      </div>
      {isWinner && (
        <div className="winner rocket">
          <p>{newGameText[0]}</p>
          <div
            onClick={() => {
              getRandomWord();
              setGuessedLetters([]);
              setSeconds(226);
            }}
            className="new-game"
          >
            NEW MISSION
          </div>
        </div>
      )}
      {isLoser && (
        <div className="loser rocket">
          <p>{newGameText[1]}</p>

          <div
            onClick={() => {
              getRandomWord();
              setGuessedLetters([]);
              setSeconds(226);
            }}
            className="new-game lose"
          >
            NEW MISSION
          </div>
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
