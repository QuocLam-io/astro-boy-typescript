import React from "react";

type WordDisplayProps = {
  randomWord: string;
  guessedLetters: string[];
  revealWord?: boolean;
};

const WordDisplay = ({
  randomWord,
  guessedLetters,
  revealWord = false,
}: WordDisplayProps) => {
  return (
    <div className="WordDisplay">
      <p>GUESS THE WORD BELOW</p>
      <div className="word">
        {randomWord.split("").map((letter, index) => {
          return (
            <div className="letter-box" key={index}>
              {" "}
              <span
                className="letter"
                style={{
                  visibility:
                    guessedLetters.includes(letter) || revealWord
                      ? "visible"
                      : "hidden",
                  color:
                    revealWord && !guessedLetters.includes(letter) ? "salmon" : "",
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
