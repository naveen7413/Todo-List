import React from "react";
import { CheckCircle, Circle, Trash2, Clock } from "lucide-react"; // ✅ modern icons

function TaskList({ tasks, filter, toggleTask, deleteTask }) {
  const filtered = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="task-list">
      {filtered.length === 0 ? (
        <p className="no-task">✨ No tasks found</p>
      ) : (
        filtered.map((task, index) => (
          <div
            key={index}
            className={`task-card ${task.completed ? "completed" : ""}`}
          >
            {/* Left side toggle + task info */}
            <div className="task-info" onClick={() => toggleTask(index)}>
              {task.completed ? (
                <CheckCircle className="icon completed-icon" />
              ) : (
                <Circle className="icon pending-icon" />
              )}
              <div>
                <h4>{task.text}</h4>
                <p className="meta">
                  <span className="category">📂 {task.category}</span>
                  <span className="due">
                    <Clock size={14} /> {task.dueDate || "No date"}
                  </span>
                  <span className={`priority ${task.priority.toLowerCase()}`}>
                    {task.priority}
                  </span>
                </p>
              </div>
            </div>

            {/* Delete button */}
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              <Trash2 size={18} />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
