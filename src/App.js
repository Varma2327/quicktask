import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButton";
import LiveClock from "./components/LiveClock";
import confetti from "canvas-confetti";

const appStyle = {
  backgroundImage: "url('/assets/background.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
  padding: "40px",
  fontFamily: "'Poppins', sans-serif"
};

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const updatedTasks = tasks.map((task) => {
        const due = new Date(task.dueTime).getTime();
        const diff = due - now;

        if (task.dueTime && !task.alerted30 && diff <= 30 * 60 * 1000 && diff > 20 * 60 * 1000) {
          alert(`⏰ 30 minutes left for: "${task.text}"`);
          return { ...task, alerted30: true };
        }

        if (task.dueTime && !task.alerted20 && diff <= 20 * 60 * 1000 && diff > 10 * 60 * 1000) {
          alert(`⚠️ 20 minutes left for: "${task.text}"`);
          return { ...task, alerted20: true };
        }

        if (task.dueTime && !task.alerted10 && diff <= 10 * 60 * 1000 && diff > 0) {
          alert(`⏳ 10 minutes left for: "${task.text}"`);
          return { ...task, alerted10: true };
        }

        if (task.dueTime && !task.overdue && diff <= 0) {
          alert(`❗ "${task.text}" is now overdue!`);
          return { ...task, overdue: true };
        }

        return task;
      });
      setTasks(updatedTasks);
    }, 60000);

    return () => clearInterval(interval);
  }, [tasks]);

  const addTask = (text, dueTime) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      dueTime,
    };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task.completed) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div style={appStyle}>
      <LiveClock />
      <div className="app">
        <TaskForm addTask={addTask} />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
