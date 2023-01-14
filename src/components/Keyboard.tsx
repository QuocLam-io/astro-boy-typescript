import React from "react";

type KeyboardProps = {
  addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({ addGuessedLetter }: KeyboardProps) => {
  const topKeys: string[] = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const middleKeys: string[] = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const bottomKeys: string[] = ["z", "x", "c", "v", "b", "n", "m"];

  const topRow = topKeys.map((letter) => (
    <button onClick={() => addGuessedLetter(letter)} className="key">
      {letter}
    </button>
  ));
  const middleRow = middleKeys.map((letter) => (
    <button onClick={() => addGuessedLetter(letter)} className="key">
      {letter}
    </button>
  ));
  const bottomRow = bottomKeys.map((letter) => (
    <button onClick={() => addGuessedLetter(letter)} className="key">
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
