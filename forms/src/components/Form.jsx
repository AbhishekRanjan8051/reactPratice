import React from "react";

function Form() {
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [headingname, setHeadingname] = React.useState();
  const [headinglastname, setHeadinglastname] = React.useState();


  const inputAdd = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const inputAddTwo = (event) => {
    setLastname(event.target.value);
  };
  const onSubmits = (e) => {
    e.preventDefault();
    setHeadingname(name);
    setHeadinglastname(lastname);
  };
  return (
    <div>
      <form onSubmit={onSubmits}>
        <div>
          <h2>React Form</h2>
          <h1>Hello {headingname} {headinglastname}</h1>
          <input
            onChange={inputAdd}
            type="text"
            placeholder="Enter your Name"
            value={name}
          />
          <br />
          <input
            onChange={inputAddTwo}
            type="text"
            placeholder="Enter your Name"
            value={lastname}
          />
          <br />
          <br />
          <button type="submit">Sumbit 👍</button>
          <hr />
        </div>
      </form>
    </div>
  );
}
export { Form };
