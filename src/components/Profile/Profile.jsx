import "./Profile.css";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

function Profile() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="profile">
      <div className="profile__sidebar">
        {currentUser ? (
          <p className="profile__sidebar-username">{currentUser.name}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="profile__content">
        {/* User's materials will go here */}
      </div>
    </div>
  );
}

export default Profile;
