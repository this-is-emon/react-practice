// In this example, the text state variable holds a string. When you type,
// handleChange reads the latest input value from the browser input DOM element,
// and calls setText to update the state. This allows you to display the current
// text below.
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function InputText() {
  const [text, setText] = useState("Hello");

  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input type="text" value={text} onChange={handleText} />
      <p>You typed : {text}</p>
      <button type="button" onClick={() => setText("Hello!")}>
        Reset
      </button>
    </>
  );
}

export default InputText;
