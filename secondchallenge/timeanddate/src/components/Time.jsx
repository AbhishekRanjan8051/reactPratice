import React from "react";

function AbhiTime() {
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Time is :- {time}</h1>
    </div>
  );
}
export {AbhiTime}