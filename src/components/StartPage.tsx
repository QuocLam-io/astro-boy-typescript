import React from "react";

interface StartPageProps {
  getRandomWord: () => void;
  setStartGame: (startGame: boolean) => void;
  setDiary: (diary: boolean) => void;
  audio: HTMLAudioElement;
  startTimer: () => void;
}

const StartPage: React.FC<StartPageProps> = ({
  getRandomWord,
  setStartGame,
  setDiary,
  audio,
  startTimer,
}) => {
  const title = "ASTROBOY";

  return (
    <div className="StartPage">
      <img className="planet" src="./imgs/planet.svg" alt="cartoon planet" />
      <div className="word">
        {title.split("").map((letter, index) => {
          return (
            <div className="letter-box" key={index}>
              {" "}
              <span className="letter">{letter}</span>
            </div>
          );
        })}
      </div>
      <div
        onClick={() => {
          // getRandomWord();
          startTimer();
          audio.play();
          setStartGame(false);
          setDiary(true);
        }}
        className="start-mission"
      >
        START MISSION
      </div>
    </div>
  );
};

export default StartPage;
