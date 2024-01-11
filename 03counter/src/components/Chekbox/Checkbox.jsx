// In this example, the liked state variable holds a boolean. When you click the
//  input, setLiked updates the liked state variable with whether the browser
//  checkbox input is checked. The liked variable is used to render the text
//  below the checkbox.
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Checkbox() {
  const [liked, setLiked] = useState(true);

  function handleCheckbox(e) {
    setLiked(e.target.checked);
  }
  return (
    <>
      <label>
        <input type="checkbox" checked={liked} onChange={handleCheckbox} />I
        liked this
      </label>
      <p>You {liked ? "liked" : "did not liked"} this</p>
    </>
  );
}

export default Checkbox;
