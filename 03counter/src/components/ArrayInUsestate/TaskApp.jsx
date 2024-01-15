/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AddToDo from "./AddToDo";
import TaskList from "./TaskList";

let nextId = 3;
const initialToDos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

function TaskApp() {
  const [toDos, setToDos] = useState(initialToDos);

  //handler functions
  function handleAddToDo(title) {
    setToDos([
      ...toDos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function handleEditToDo(nextToDo) {
    setToDos(
      toDos.map((t) => {
        if (nextToDo.id === t.id) {
          return nextToDo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteToDo(toDoId) {
    setToDos(toDos.filter((t) => t.id !== toDoId));
  }

  return (
    <>
      <h1>To Do App</h1>
      <AddToDo onAddToDo={handleAddToDo} />
      <br />
      <br />
      <TaskList
        toDos={toDos}
        onEditToDo={handleEditToDo}
        onDeleteToDo={handleDeleteToDo}
      />
    </>
  );
}

export default TaskApp;
