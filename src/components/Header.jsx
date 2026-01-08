import { useState } from "react";
import { Plus } from "lucide-react";
import TaskForm from "./TaskForm";

export default function Header({ onAddTask }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="header">
        <h2>Tasks</h2>

        <button
          className="btn-primary new-task-btn"
          onClick={() => setShowForm(true)}
        >
          <span>New Task</span>
          <Plus size={16} />
        </button>
      </div>

      {showForm && (
        <TaskForm
          onAdd={(task) => {
            onAddTask(task);
            setShowForm(false);
          }}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}
