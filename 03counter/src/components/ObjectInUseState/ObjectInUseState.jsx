// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function ObjectInUseState() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const changeColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "Blue" };
    });
  };
  const changeBrand = () => {
    setCar((previousState) => {
      return { ...previousState, model: "Ferrari" };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button type="button" onClick={changeColor}>
        Blue
      </button>
      <br />
      <br />
      <button type="button" onClick={changeBrand}>
        Ferrari
      </button>
      <div></div>
    </>
  );
}

export default ObjectInUseState;
