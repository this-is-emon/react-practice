//This example passes the updater function, so the “+3” button works.
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function UpdaterFunction() {
  const [age, setAge] = useState(55);

  function ageUpdater() {
    //Wrong Approach
    // setAge(age + 1);

    //Correct Approach
    setAge((age) => age + 1);
  }
  return (
    <>
      <h1>Your age: {age}</h1>
      <button type="button" onClick={() => ageUpdater()}>
        +1
      </button>
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          ageUpdater();
          ageUpdater();
          ageUpdater();
        }}
      >
        +3
      </button>
    </>
  );
}

export default UpdaterFunction;
