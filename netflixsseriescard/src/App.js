import "./App.css";
import { Netflix } from "./components/Netflix";
import { sdata } from "./components/Card";

function cardshow(val) {
  return (
    <Netflix
      image={val.image}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}

function App() {
  return <div className="App">{sdata.map(cardshow)}</div>;
}

export default App;
