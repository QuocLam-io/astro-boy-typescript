import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Keyboard from "./components/Keyboard";
import StartPage from "./components/StartPage";
import WordDisplay from "./components/WordDisplay";
import ProgressDisplay from "./components/ProgressDisplay";
import HowToPlay from "./components/HowToPlay";
import axios from "axios";

const App: React.FC = () => {
  const [randomWord, setRandomWord] = useState<string>("");
  const [startGame, setStartGame] = useState<boolean>(true);
  const [howToPlay, setHowToPlay] = useState<boolean>(false);

  const getRandomWord = async () => {
    const response = await axios
      .get(`https://api.api-ninjas.com/v1/randomword`, {
        headers: { "X-Api-Key": "stcD1E9lKA6Fx395OTMigw==CFDom3PSmx2m5AAW" },
      })
      .then((res) => {
        console.log(res.data);
        setRandomWord(res.data.word);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      {/* {startGame && <StartPage 
        getRandomWord={getRandomWord}
        setStartGame={setStartGame} getRandomWord={getRandomWord} />} */}
      {/* {howToPlay && <HowToPlay setHowToPlay={setHowToPlay} />} */}
      <Navbar howToPlay={howToPlay} setHowToPlay={setHowToPlay} />
      <div className="display">
        <div className="left-display">
          <WordDisplay randomWord={randomWord} />
          <Keyboard />
        </div>
        <ProgressDisplay />
      </div>
    </div>
  );
};

export default App;
