import React from "react";

type KeyboardProps = {
  addGuessedLetter: (letter: string) => void;
  correctLetters: string[];
  incorrectLetters: string[];
};

const Keyboard = ({
  addGuessedLetter,
  correctLetters,
  incorrectLetters,
}: KeyboardProps) => {
  const topKeys: string[] = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const middleKeys: string[] = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const bottomKeys: string[] = ["z", "x", "c", "v", "b", "n", "m"];

  const topRow = topKeys.map((letter) => (
    <button
      onClick={() => addGuessedLetter(letter)}
      className={`key ${correctLetters.includes(letter) && "correct"} ${
        incorrectLetters.includes(letter) && "incorrect"
      }`}
    >
      {letter}
    </button>
  ));
  const middleRow = middleKeys.map((letter) => (
    <button
      onClick={() => addGuessedLetter(letter)}
      className={`key ${correctLetters.includes(letter) && "correct"} ${
        incorrectLetters.includes(letter) && "incorrect"
      }`}
    >
      {letter}
    </button>
  ));
  const bottomRow = bottomKeys.map((letter) => (
    <button
      onClick={() => addGuessedLetter(letter)}
      className={`key ${correctLetters.includes(letter) && "correct"} ${
        incorrectLetters.includes(letter) && "incorrect"
      }`}
    >
      {letter}
    </button>
  ));

  return (
    <div className="Keyboard">
      <div className="keyboard-row">{topRow}</div>
      <div className="keyboard-row">{middleRow}</div>
      <div className="keyboard-row">{bottomRow}</div>
    </div>
  );
};

export default Keyboard;
