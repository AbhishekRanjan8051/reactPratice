import React from "react";

function Click() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <h1>0</h1>
      <button style={{backgroundColor:"skyblue" }} onClick={handleClick}>
        Click
      </button>
    </div>
  );
}
export { Click };
