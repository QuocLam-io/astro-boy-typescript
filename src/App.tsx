import "./App.scss";
import Navbar from "./components/Navbar";
import Keyboard from "./components/Keyboard";
import StartPage from "./components/StartPage";
import WordDisplay from "./components/WordDisplay";
import ProgressDisplay from "./components/ProgressDisplay";


function App() {
  return (
    <div className="App">
      <StartPage />
      <Navbar />
      <WordDisplay />
      <ProgressDisplay />
      <Keyboard />
    </div>
  );
}

export default App;
