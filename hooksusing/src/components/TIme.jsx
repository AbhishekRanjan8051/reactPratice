import React from "react";
import "./time.css";

function Time() {
  let time = new Date().toLocaleTimeString();

  let [currtime, setCurrtime] = React.useState(time);

  const showtime = () => {
    time = new Date().toLocaleTimeString();
    setCurrtime(time);
  };
  return (
    <div>
      <h1>Time</h1>
      <h1 className="show">{currtime}</h1>
      <br/>
      <button onClick={showtime} className="timebtn">
        Get time
      </button>
    </div>
  );
}
export { Time };
