import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("Work");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask({ text, dueDate, category, priority, completed: false });
    setText("");
    setDueDate("");
    setCategory("Work");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Work</option>
        <option>Personal</option>
        <option>Learning</option>
      </select>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
