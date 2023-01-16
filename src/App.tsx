import React, { useCallback, useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Keyboard from "./components/Keyboard";
import StartPage from "./components/StartPage";
import WordDisplay from "./components/WordDisplay";
import ProgressDisplay from "./components/ProgressDisplay";
import HowToPlay from "./components/HowToPlay";
import axios from "axios";

const App: React.FC = () => {
  //Random Word States
  const [randomWord, setRandomWord] = useState<string>("meowmeow");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const correctLetters = guessedLetters.filter((letter) =>
    randomWord.includes(letter)
  );
  const incorrectLetters = guessedLetters.filter(
    (letter) => !randomWord.includes(letter)
  );

  //Modal States
  const [startGame, setStartGame] = useState<boolean>(true);
  const [howToPlay, setHowToPlay] = useState<boolean>(false);

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
        setRandomWord(res.data.word.tolowerCase());
        console.log("random word: ", randomWord);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log("random word: ", randomWord);
  // console.log("guessed:", guessedLetters)
  // console.log("wrong:", wrongLetters)

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

  /* -------------------------------------------------------------------------- */

  return (
    <div className="App">
      {/* {startGame && <StartPage 
        getRandomWord={getRandomWord}
        setStartGame={setStartGame} getRandomWord={getRandomWord} />} */}
      {howToPlay && <HowToPlay setHowToPlay={setHowToPlay} />}
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
        />
      </div>
    </div>
  );
};

export default App;
