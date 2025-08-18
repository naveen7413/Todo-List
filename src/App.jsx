import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import "./style.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="container">
      <h1>Advanced To-Do List</h1>
      <TaskForm addTask={addTask} />
      <Filters setFilter={setFilter} />
      <TaskList
        tasks={tasks}
        filter={filter}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
