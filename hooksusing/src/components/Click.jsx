import React from "react";
import "./click.css";

function Click() {
  const [count, setCount] = React.useState(1);
  const handleClick = () => {
    setCount(count + 1);
    // console.log("clicked");
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>{count}</h1>
      <div className="btnstyle">
        <button
          className="btn"
          style={{ backgroundColor: "skyblue" }}
          onClick={handleClick}
        >
          Click
        </button>

        <button
          onClick={handleReset}
          className="btn"
          style={{ backgroundColor: "green" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export { Click };
