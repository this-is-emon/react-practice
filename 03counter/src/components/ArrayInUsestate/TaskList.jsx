/* eslint-disable no-unused-vars */
import React from "react";
import SingleTask from "./SingleTask";

// eslint-disable-next-line react/prop-types
function TaskList({ toDos, onEditToDo, onDeleteToDo }) {
  return (
    <>
      <ul>
        {
          // eslint-disable-next-line react/prop-types
          toDos.map((todo) => {
            <li key={todo.id}>
              <SingleTask
                todo={todo}
                onEdit={onEditToDo}
                onDelete={onDeleteToDo}
              />
            </li>;
          })
        }
      </ul>
    </>
  );
}

export default TaskList;
