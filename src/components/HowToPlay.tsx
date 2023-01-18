import React from "react";
import { motion } from "framer-motion";

interface HowToPlayProps {
  setHowToPlay: React.Dispatch<React.SetStateAction<boolean>>;
  howToPlay: boolean;
}

const HowToPlay = ({ setHowToPlay, howToPlay }: HowToPlayProps) => {
  return (
    <motion.div
      className="HowToPlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div id="instructions">
        <div className="instructions-header">
          <h1>HOW TO PLAY</h1>
          <img
            //!TODO: HowToPlay close transition
            onClick={() => {
              setHowToPlay(!howToPlay);
            }}
            src="../../public/imgs/closeVector.svg"
            alt="close button"
          />
        </div>
        <div className="instructions-body">
          <p>ASTRO BOY is a 1 player Word-Guessing game.</p>
          <p>How to Play:</p>
          <p>
           You will have 6 attempts or until the music stops playing to guess the randomly generated word.
            </p>
            <img src="/imgs/how-to-play.svg" alt="" />
            <p>GOOD LUCK.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HowToPlay;
