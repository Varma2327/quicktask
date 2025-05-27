import React from "react";

function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </li>
  );
}

export default TaskItem;
