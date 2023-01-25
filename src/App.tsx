import React, { useCallback, useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Keyboard from "./components/Keyboard";
import StartPage from "./components/StartPage";
import WordDisplay from "./components/WordDisplay";
import ProgressDisplay from "./components/ProgressDisplay";
import HowToPlay from "./components/HowToPlay";
import Diary from "./components/Diary";
import axios from "axios";

const App: React.FC = () => {
  //Modal States
  const [startGame, setStartGame] = useState<boolean>(true);
  const [howToPlay, setHowToPlay] = useState<boolean>(false);
  const [diary, setDiary] = useState(false);

  //Random Word States
  const [randomWord, setRandomWord] = useState<string>("stranger");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const correctLetters = guessedLetters.filter((letter) =>
    randomWord.includes(letter)
  );
  const incorrectLetters = guessedLetters.filter(
    (letter) => !randomWord.includes(letter)
  );

  //Win Lose Logic
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = randomWord
    .split("")
    .every((letter) => correctLetters.includes(letter));

  //Calls API for a random word
  const getRandomWord = () => {
    axios
      .get(`https://api.api-ninjas.com/v1/randomword`, {
        headers: { "X-Api-Key": "stcD1E9lKA6Fx395OTMigw==CFDom3PSmx2m5AAW" },
      })
      .then((res) => {
        console.log(res.data);
        let response = res.data.word;
        setRandomWord(response.toLowerCase());
        console.log("random word: ", randomWord);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Event Listeners for physical and virtual Keyboard
  const addGuessedLetter = useCallback(
    //unables adding letter
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters([...guessedLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", keyPressHandler);

    return () => {
      document.removeEventListener("keypress", keyPressHandler);
    };
  }, [guessedLetters]);

  //* ---------------------------------- Audio --------------------------------- */
  let audio = new Audio("./audio/the_color_violet.mp3");

  const [seconds, setSeconds] = useState(226);

  // console.log(seconds);

  const startTimer = () => {
    let something = setInterval(() => {
      if (seconds > 220) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
      // console.log(seconds);
    }, 1000);

    setTimeout(() => {
      clearInterval(something);
    }, 226000);
  };
  // console.log(seconds);

  if (seconds === 0) {
    setSeconds(226);
  }

  //* -------------------------------------------------------------------------- */
  return (
    <div className="App">
      {startGame && (
        <StartPage
          getRandomWord={getRandomWord}
          setStartGame={setStartGame}
          setDiary={setDiary}
          audio={audio}
          startTimer={startTimer}
        />
      )}
      {diary && <Diary diary={diary} setDiary={setDiary} />}
      {howToPlay && (
        <HowToPlay howToPlay={howToPlay} setHowToPlay={setHowToPlay} />
      )}
      <Navbar
        howToPlay={howToPlay}
        setHowToPlay={setHowToPlay}
        getRandomWord={getRandomWord}
      />
      <div className="display">
        <div className="left-display">
          <WordDisplay
            randomWord={randomWord}
            guessedLetters={guessedLetters}
            revealWord={isLoser}
          />
          <Keyboard
            disabled={isLoser || isWinner}
            correctLetters={correctLetters}
            incorrectLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
        <ProgressDisplay
          incorrectGuesses={incorrectLetters.length}
          isLoser={isLoser}
          isWinner={isWinner}
          getRandomWord={getRandomWord}
          randomWord={randomWord}
          setGuessedLetters={setGuessedLetters}
          startGame={startGame}
          seconds={seconds}
          setSeconds={setSeconds}
        />
      </div>
    </div>
  );
};

export default App;
