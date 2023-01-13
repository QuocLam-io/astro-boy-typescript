import React from "react";

type WordDisplayProps = {
  randomWord: string;
};

const WordDisplay = ({ randomWord }: WordDisplayProps) => {
 const guessedLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  return (
    <div className="WordDisplay">
      <div className="word">
        {randomWord.split("").map((letter, index) => {
          return <span
          style={{borderBottom: "1px solid white"}}
          > <span
          style={{

            visibility: guessedLetters.includes(letter) ? "visible" : "hidden",
          }}
          >{letter}</span> </span>;
        })}
      </div>
    </div>
  );
};

export default WordDisplay;
