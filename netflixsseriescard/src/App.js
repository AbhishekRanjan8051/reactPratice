import "./App.css";
import { Netflix } from "./components/Netflix";

function App() {
  return (
    <div className="App">
      <h1>Abhishek Ranjan</h1>
      <Netflix
        image="https://filmdaily.co/wp-content/uploads/2020/06/moneyheist-lede-5-1300x650.jpg"
        title="A Netflix Original Series"
        sname="Money Heist"
        link="https://www.netflix.com/in/title/80192098"
      />
      <Netflix />
    </div>
  );
}

export default App;
