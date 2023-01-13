import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Keyboard from "./components/Keyboard";
import StartPage from "./components/StartPage";
import WordDisplay from "./components/WordDisplay";
import ProgressDisplay from "./components/ProgressDisplay";
import axios from "axios";

const App: React.FC = () => {

  const [randomWord, setRandomWord] = useState<string>("");
  

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

  // getRandomWord();

  return (
    <div className="App">
      {/* <StartPage /> */}
      <Navbar />
      {/* <WordDisplay />
      <ProgressDisplay />
      <Keyboard /> */}
    </div>
  );
};

export default App;
