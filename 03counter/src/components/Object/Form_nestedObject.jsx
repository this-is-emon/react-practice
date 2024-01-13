// Form (nested object)
// In this example, the state is more nested. When you update nested state,
// you need to create a copy of the object you’re updating, as well as any
// objects “containing” it on the way upwards. Read updating a nested object
// to learn more.
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Form_nestedObject() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image:
        "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
  });
  return (
    <>
      <label htmlFor="name">
        Name:{" "}
        <input
          type="text"
          value={person.name}
          onChange={(e) =>
            setPerson({
              ...person,
              name: e.target.value,
            })
          }
        />
      </label>
      <br />
      <br />
      <label htmlFor="title">
        Title:{" "}
        <input
          type="text"
          value={person.artwork.title}
          onChange={(e) =>
            setPerson({
              ...person,
              artwork: {
                ...person.artwork,
                title: e.target.value,
              },
            })
          }
        />
      </label>
      <br />
      <br />
      <label htmlFor="city">
        City:{" "}
        <input
          type="text"
          value={person.artwork.city}
          onChange={(e) =>
            setPerson({
              ...person,
              artwork: {
                ...person.artwork,
                city: e.target.value,
              },
            })
          }
        />
      </label>
      <br />
      <br />
      <label htmlFor="image">
        Image:{" "}
        <input
          type="text"
          value={person.artwork.image}
          onChange={(e) =>
            setPerson({
              ...person,
              artwork: {
                ...person.artwork,
                image: e.target.value,
              },
            })
          }
        />
      </label>
      <p>
        <i>{person.artwork.title}</i> by {person.name} <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}

export default Form_nestedObject;
