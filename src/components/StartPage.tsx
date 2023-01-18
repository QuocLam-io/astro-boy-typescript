import React from "react";

interface StartPageProps {
  getRandomWord: () => void;
  setStartGame: (startGame: boolean) => void;
}

const StartPage: React.FC<StartPageProps> = ({
  getRandomWord,
  setStartGame,
}) => {
  const title = "ASTROBOY";

  return (
    <div className="StartPage">
      <img src="./imgs/planet.svg" alt="cartoon planet" />
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
          getRandomWord();
        }}
        className="new-game"
      >
        START MISSION
      </div>
    </div>
  );
};

export default StartPage;
