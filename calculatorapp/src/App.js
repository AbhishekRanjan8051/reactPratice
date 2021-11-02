import "./App.css";
import { add, sub, multi, div } from "./components/Calc";

function App() {
  return (
    <div className="App">
      <ol>
        <li>
          sum :- <b>{add(40, 4)}</b>
        </li>
        <li>
          sub :-<b>{sub(40, 4)}</b>
        </li>
        <li>
          multi :-<b>{multi(40, 4)}</b>
        </li>
        <li>
          div :-<b>{div(40, 3)}</b>
        </li>
      </ol>
    </div>
  );
}

export default App;
