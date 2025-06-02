import "./SideBar.css";
import { Navigate } from "react-router-dom";

function SideBar({
  currentUser,
  handleEditProfile,
  onSignOut,
  handleAddMaterial,
}) {
  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <h3 className="sidebar__name">{currentUser.name}</h3>
      </div>

      <nav className="sidebar__nav">
        <button className="sidebar__button" onClick={handleAddMaterial}>
          Add Material
        </button>
        <button className="sidebar__button" onClick={handleEditProfile}>
          Edit Profile
        </button>
        <button className="sidebar__button" onClick={onSignOut}>
          Log out
        </button>
      </nav>
    </div>
  );
}

export default SideBar;
