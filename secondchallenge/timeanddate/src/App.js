// import logo from './logo.svg';
import "./App.css";
import { Abhi } from "./components/Date";
import { AbhiTime } from "./components/Time";

function App() {
  const links = "https://www.google.com";
  const img1 = "https://i.imgur.com/CUG0Aof.jpeg";
  const img2 = "https://i.imgur.com/bFDWhkK.jpeg";
  return (
    <div className="App">
      <h1 className="heading">My name is abhishek Ranjan</h1>

      <Abhi />
      <AbhiTime></AbhiTime>
      <div className="imgdiv">
        <img alt="food" src={img1} />
        <a href={links} target="google">
          <img alt="food" src={img2} />
        </a>
      </div>
    </div>
  );
}

export default App;
