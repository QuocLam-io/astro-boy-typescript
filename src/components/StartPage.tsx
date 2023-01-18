import React from "react";

interface StartPageProps {
  getRandomWord: () => void;
  setStartGame: (startGame: boolean) => void;
}

const StartPage: React.FC<StartPageProps> = ({ getRandomWord, setStartGame }) => {
  return <div className="StartPage"></div>;
};

export default StartPage;
