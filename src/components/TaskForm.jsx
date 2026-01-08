import { useState } from "react";

export default function TaskForm({ onAdd, onClose }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

  const handleAdd = () => {
    if (!title.trim()) return;

    onAdd({ title, status });
    setTitle("");
    setStatus("todo");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Add New Task</h3>

        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <div className="modal-actions">
          <button className="btn-primary" onClick={handleAdd}>
            Add
          </button>
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
