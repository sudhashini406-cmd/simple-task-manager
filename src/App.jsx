import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TaskBoard from "./components/TaskBoard";
import TopBar from "./components/TopBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks"));
    if (stored) setTasks(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = ({ title, status }) => {
    setTasks([...tasks, { id: Date.now(), title, status }]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="page-bg">
      <div className="dashboard-border">
        <div className="dashboard">
          <Sidebar />
          <div className="main">
            <TopBar search={search} setSearch={setSearch} />
            <Header onAddTask={addTask} />
            <TaskBoard
              tasks={tasks}
              search={search}
              onUpdate={updateTask}
              onDelete={deleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
