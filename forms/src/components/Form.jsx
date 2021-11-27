import React from "react";

function Form() {
  const [name, setName] = React.useState("");
  const inputAdd = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  return (
    <div>
      <h2>React Form</h2>
      <h1>Hello {name}</h1>
      <input onChange={inputAdd} type="text" placeholder="Enter your Name" />
      <br />
      <br />
      <button>Sumbit 🧐</button>
      <hr />
    </div>
  );
}
export { Form };
