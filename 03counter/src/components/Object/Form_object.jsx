// Form (object)
// In this example, the form state variable holds an object. Each input has
// a change handler that calls setForm with the next state of the entire form.
// The { ...form } spread syntax ensures that the state object is replaced
// rather than mutated.
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Form_object() {
  const [form, setForm] = useState({
    firstName: "Emon",
    lastName: "Mbs",
    email: "emonmbs@gmail.com",
  });
  return (
    <>
      <label htmlFor="">
        First Name :{" "}
        <input
          type="text"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
      </label>
      <br />
      <br />
      <label htmlFor="">
        Last Name :{" "}
        <input
          type="text"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
      </label>
      <br />
      <br />
      <label htmlFor="">
        Email :{" "}
        <input
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>
      <br />
      <br />
      <p>
        {form.firstName}
        <br />
        {form.lastName}
        <br />({form.email})
      </p>
    </>
  );
}

export default Form_object;
