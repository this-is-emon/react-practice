// You can declare more than one state variable in the same component.
// Each state variable is completely independent.
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(42);
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={() => setAge(age + 1)}>Increment age</button>
      <p>
        Helllo, {name}. You are {age}
      </p>
    </>
  );
}

export default Form;
