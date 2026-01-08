import { Bell, Search, X } from "lucide-react";

export default function TopBar({ search, setSearch }) {
  return (
    <div className="topbar">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <X size={16} className="clear-btn" onClick={() => setSearch("")} />
        )}
        <Search size={18} className="search-icon" />
      </div>

      <div className="topbar-actions">
        <Bell size={20} />
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="profile-img"
        />
      </div>
    </div>
  );
}
