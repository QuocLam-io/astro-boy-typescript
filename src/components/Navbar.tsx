import React from "react";

type NavbarProps = {
  howToPlay: boolean;
  setHowToPlay: React.Dispatch<React.SetStateAction<boolean>>;
  getRandomWord: () => void;
};

const Navbar = ({ howToPlay, setHowToPlay, getRandomWord }: NavbarProps) => {
  return (
    <div className="Navbar">
      <div className="logo">
        <div className="icon">🚀</div>
        <p>ASTRO BOY</p>
      </div>
      <button
        onClick={() => {
          getRandomWord();
        }}
      >
        Get Random Word
      </button>
      <div
        onClick={() => {
          setHowToPlay(!howToPlay);
        }}
        className="how-to-play-btn"
      >
        How to Play
      </div>
    </div>
  );
};

export default Navbar;
