/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function AddToDo(onAddToDo) {
  const [title, setTitle] = useState("");
  return (
    <>
      <label htmlFor="">
        <input
          type="text"
          placeholder="Add to do"
          value={title}
          onChange={(e) => {
            e.target.value;
          }}
        />
      </label>{" "}
      <button
        onClick={() => {
          setTitle("");
          onAddToDo(title);
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddToDo;
