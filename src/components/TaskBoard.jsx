import TaskColumn from "./TaskColumn";

export default function TaskBoard({ tasks, search, onUpdate, onDelete }) {
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  if (search && filteredTasks.length === 0) {
    return (
      <div className="no-tasks-found">
        <p>No tasks found </p>
      </div>
    );
  }

  return (
    <div className="board">
      <TaskColumn
        title="To do"
        status="todo"
        tasks={filteredTasks}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
      <TaskColumn
        title="In progress"
        status="inprogress"
        tasks={filteredTasks}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
      <TaskColumn
        title="Done"
        status="done"
        tasks={filteredTasks}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  );
}
