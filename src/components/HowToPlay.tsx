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
          <h2>HOW TO PLAY</h2>
          <img
      //!TODO: HowToPlay close transition
            onClick={() => {
              setHowToPlay(!howToPlay);
            }}
            src="../../public/imgs/closeVector.svg"
            alt="close button"
          />
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis amet
        beatae repellat nostrum voluptatibus nemo ut vel natus porro odio quam,
        voluptates delectus dolore excepturi at provident facere fuga.
      </div>
    </motion.div>
  );
};

export default HowToPlay;
