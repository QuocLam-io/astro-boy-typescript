import React from "react";

interface StartPageProps {
  getRandomWord: () => void;
}

const StartPage: React.FC<StartPageProps> = ({ getRandomWord }) => {
  return <div>StartPage</div>;
};

export default StartPage;
