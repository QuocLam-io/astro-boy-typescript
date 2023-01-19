import React from "react";

type WordDisplayProps = {
  randomWord: string;
  guessedLetters: string[];
  reveal?: boolean;
};

const WordDisplay = ({ randomWord, guessedLetters, reveal }: WordDisplayProps) => {

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
