import React from "react";
import "./digitalclock.css";
function Digitalclock() {
  let time = new Date().toLocaleTimeString();

  let [currtime, setCurrtime] = React.useState(time);

  let updatetime = () => {
    time = new Date().toLocaleTimeString();

    setCurrtime(time);
  };

  setInterval(updatetime, 1000);
  return (
    <div className="digitalclock">
      <h1>digital clock</h1>
      <h2>{currtime} 🕶️</h2>
    </div>
  );
}
export { Digitalclock };
