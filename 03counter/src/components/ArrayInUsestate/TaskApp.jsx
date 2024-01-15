/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AddToDo from "./AddToDo";
import TaskList from "./TaskList";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <>
      <h1>To Do App</h1>
      <AddToDo onAddToDo={handleAddToDo} />
      <TaskList
        todos={todos}
        onEditToDo={handleEditToDo}
        onDeleteToDo={handleDeleteToDo}
      />
    </>
  );
}

export default TaskApp;
