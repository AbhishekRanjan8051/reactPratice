import React from "react";
import "./greeting.css";

function Greeating() {
  let currTime = new Date();
  currTime = currTime.getHours();
  let greet = "";

  let css = {};

  if (currTime >= 1 && currTime < 12) {
    greet = "Good Morning";
    css.color = "Green";
  } else if (currTime >= 12 && currTime < 19) {
    greet = "Good Afternoon";
    css.color = "Orange";
  } else {
    greet = "Good Night";
    css.color = "Blue";
  }
  return (
    <div>
      <h1>
        Hello Sir,<span style={css}> {greet} </span>
      </h1>
    </div>
  );
}

export { Greeating };
