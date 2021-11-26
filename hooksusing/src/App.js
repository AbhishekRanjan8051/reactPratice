// import logo from "./logo.svg";
import "./App.css";
import { Click } from "./components/Click";
import { Digitalclock } from "./components/Digitalclock";
import { Time } from "./components/TIme";

function App() {
  return (
    <div className="App">
      <span className="emoji"> 🙏</span>
      <Click />
      <Time />
      <br />
      <Digitalclock />
    </div>
  );
}

export default App;
