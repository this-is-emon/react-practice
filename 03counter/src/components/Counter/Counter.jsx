// In this example, the count state variable holds a number. Clicking the button increments it.
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>You pressed me {count} times</button>;
}

export default Counter;
