import React from "react";
import axios from "axios";

type ProgressDisplayProps = {
  incorrectGuesses: number;
  isLoser: boolean;
  isWinner: boolean;
  getRandomWord: () => void;
  randomWord: string;
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  audio: HTMLAudioElement;
};

const ProgressDisplay = ({
  incorrectGuesses,
  isLoser,
  isWinner,
  getRandomWord,
  randomWord,
  setGuessedLetters,
  audio,
}: ProgressDisplayProps) => {
  //Win Lose Text
  const newGameText: string[] = [
    "WAY TO GO SPACE COWBOY",
    "WELCOME TO THE COLD EMPTINESS OF SPACE",
  ];

  return (
    <div className="ProgressDisplay">
      <div className="counter-displays">
        <div className="time-left">
          <p>Time Left</p>
          <div className="countdown">{}</div>
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
