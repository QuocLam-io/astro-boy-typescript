import "./App.scss";
import Navbar from "./components/Navbar";
import Keyboard from "./components/Keyboard";
import StartPage from "./components/StartPage";
import WordDisplay from "./components/WordDisplay";
import ProgressDisplay from "./components/ProgressDisplay";
import axios from "axios";

const App: React.FC = () => {

  async function getRandomWord() {
    try {
        const response = await axios.get(``);
        const data = response.data;
        // const randomWord = 
    } catch (error) {
        console.log(error);
    }
}

getRandomWord();

  return (
    <div className="App">
      {/* <StartPage /> */}
      <Navbar />
      <WordDisplay />
      <ProgressDisplay />
      <Keyboard />
    </div>
  );
};

export default App;
