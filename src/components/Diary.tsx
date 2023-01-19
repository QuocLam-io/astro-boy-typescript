import React from "react";
import { motion } from "framer-motion";

interface DiaryProps {
  setDiary: (diary: boolean) => void;
  diary: boolean;
}

const Diary = ({ setDiary, diary }: DiaryProps) => {
  return (
    <motion.div
      className="Diary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="diary-modal">
        <div className="diary-header">
          <div>
            <div
              className="circle"
              onClick={() => {
                setDiary(false);
              }}
            ></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <p>DIARY</p>
          <div></div>
        </div>
        <div className="diary-body">
          <div className="log-dates">
            <p>[DATE UNKNOWN]</p>
            <p>LOG ENTRY #145</p>
          </div>
          <div className="log-body">
            <p>
              DEAR DIARY,
              <br />
            </p>
            <p>
              It's been 3 weeks since my rocket crash landed on this planet.
            </p>
            <p>
              My crew mates have starved to death leaving me to re-assemble my
              ship and return to Earth as the broken man I am now.
            </p>
            <p>
              I fear I must use my fuel wisely, as I only have 6 turns (or until
              the song in my head ends)
            </p>
            <p>As a man of science, for the first time... I pray.</p>
            <p>END DIARY</p>
          </div>
        </div>
        <div
          onClick={() => {
            setDiary(false);
          }}
          className="start-mission"
        >
          START MISSION
        </div>
      </div>
    </motion.div>
  );
};

export default Diary;
