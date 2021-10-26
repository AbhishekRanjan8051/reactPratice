import React from "react";

function Abhi() {
  const current = new Date().toLocaleDateString();
  return (
    <div>
      <h2>current date = {current }</h2>
    </div>
  );
}

export {Abhi}