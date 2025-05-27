import React from "react";

function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text} {task.dueTime && `- due ${task.dueTime}`}
          </span>
          <button onClick={() => deleteTask(task.id)}>✖</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
