import {
  LayoutDashboard,
  FolderKanban,
  ListTodo,
  CalendarDays,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">TaskMinder</h2>

      <ul className="menu">
        <li className="menu-item">
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </li>

        <li className="menu-item">
          <FolderKanban size={18} />
          <span>Projects</span>
        </li>

        <li className="menu-item active">
          <ListTodo size={18} />
          <span>Tasks</span>
        </li>

        <li className="menu-item">
          <CalendarDays size={18} />
          <span>Calendar</span>
        </li>
      </ul>

      <p className="logout">
        <LogOut size={16} />
        Log out
      </p>
    </aside>
  );
}
