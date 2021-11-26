import React from "react";
import "./events.css";

function Event() {
  var [bg, setBg] = React.useState("");
  const [name, setName] = React.useState("click me");

  const bgChange = () => {
    // console.log("background changed");
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bg = "rgb(" + x + "," + y + "," + z + ")";

    // bg = "purple";
    setBg(bg);
    setName("Ouch 😨");
  };
  const namerev = () => {
    setName("click me");
  };
  return (
    <div className="eventbg" style={{ backgroundColor: bg }}>
      <h1>Event</h1>
      <button onDoubleClick={namerev} onClick={bgChange} className="btn">
        {name}
      </button>
    </div>
  );
}
export { Event };
