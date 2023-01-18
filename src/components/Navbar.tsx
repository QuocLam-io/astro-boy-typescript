import React from "react";

type NavbarProps = {
  howToPlay: boolean;
  setHowToPlay: React.Dispatch<React.SetStateAction<boolean>>;
  getRandomWord: () => void;
  audio: HTMLAudioElement;
};

const Navbar = ({
  howToPlay,
  setHowToPlay,
  getRandomWord,
  audio,
}: NavbarProps) => {
  return (
    <div className="Navbar">
      <div className="logo">
        <div className="icon">🚀</div>
        <p>ASTRO BOY</p>
      </div>

      <div
        onClick={() => {
          setHowToPlay(!howToPlay);
          audio.play();
        }}
        className="how-to-play-btn"
      >
        How to Play
      </div>
    </div>
  );
};

export default Navbar;
