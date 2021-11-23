import "./App.css";
import { Netflix } from "./components/Netflix";
import { sdata } from "./components/Card";

function App() {
  return (
    <div className="App">
      {sdata.map((val) => {
        return (
          <Netflix
            image={val.image}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })}
    </div>
  );
}

export default App;
