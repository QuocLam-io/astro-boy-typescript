import React from "react";

type WordDisplayProps = {
  randomWord: string;
};

const WordDisplay = ({ randomWord }: WordDisplayProps) => {
  const guessedLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="WordDisplay">
      <p>GUESS THE WORD BELOW</p>
      <div className="word">
        {randomWord.split("").map((letter, index) => {
          return (
            <div className="letter-box"
            key={index}>
              {" "}
              <span className="letter"
                style={{
                  visibility: guessedLetters.includes(letter)
                    ? "visible"
                    : "hidden",
                }}
              >
                {letter}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WordDisplay;
