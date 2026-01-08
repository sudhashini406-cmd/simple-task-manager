import { useState } from "react";
import { Pencil, Trash2, Check, X } from "lucide-react";

export default function TaskCard({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedStatus, setEditedStatus] = useState(task.status);

  const handleSave = () => {
    onUpdate(task.id, {
      ...task,
      title: editedTitle,
      status: editedStatus,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
    setEditedStatus(task.status);
    setIsEditing(false);
  };

  return (
    <div className="task-card">
      <div className="task-header">
        {isEditing ? (
          <div className="edit-area">
            <input
              className="edit-input"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              autoFocus
            />

            <select
              className="edit-select"
              value={editedStatus}
              onChange={(e) => setEditedStatus(e.target.value)}
            >
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
        ) : (
          <p className="task-title" title={task.title}>
            {task.title.length > 15
              ? task.title.slice(0, 15) + "..."
              : task.title}
          </p>
        )}

        <div className="task-actions">
          {isEditing ? (
            <>
              <button className="icon-btn save" onClick={handleSave}>
                <Check size={16} />
              </button>
              <button className="icon-btn cancel" onClick={handleCancel}>
                <X size={16} />
              </button>
            </>
          ) : (
            <>
              <button
                className="icon-btn edit"
                onClick={() => setIsEditing(true)}
              >
                <Pencil size={16} />
              </button>
              <button
                className="icon-btn delete"
                onClick={() => onDelete(task.id)}
              >
                <Trash2 size={16} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
