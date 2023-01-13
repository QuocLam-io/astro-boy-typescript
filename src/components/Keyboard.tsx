import React from "react";

type KeyboardProps = {};

const Keyboard = ({}: KeyboardProps) => {
  const topKeys: string[] = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const middleKeys: string[] = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const bottomKeys: string[] = ["z", "x", "c", "v", "b", "n", "m"];

  return <div className="Keyboard">keyboard</div>;
};

export default Keyboard;
