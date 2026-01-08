import TaskCard from "./TaskCard";
import { Circle, Loader2, CheckCircle2 } from "lucide-react";

const statusConfig = {
  todo: {
    icon: <Circle size={16} />,
    className: "todo",
  },
  inprogress: {
    icon: <Loader2 size={16} />,
    className: "inprogress",
  },
  done: {
    icon: <CheckCircle2 size={16} />,
    className: "done",
  },
};

export default function TaskColumn({
  title,
  status,
  tasks,
  onUpdate,
  onDelete,
}) {
  const config = statusConfig[status];

  return (
    <div className={`column ${config.className}`}>
      <h3 className="column-title">
        {config.icon}
        <span>{title}</span>
      </h3>

      <div className="column-tasks">
        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
      </div>
    </div>
  );
}
