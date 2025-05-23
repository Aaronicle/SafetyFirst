import "./Profile.css";
import SideBar from "../Sidebar/Sidebar";
import MaterialCard from "../MaterialCard/MaterialCard";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

function Profile({
  materials,
  handleEditProfile,
  onSignOut,
  handleAddMaterial,
}) {
  const { currentUser } = useContext(UserContext);

  const userMaterials =
    materials?.filter((material) => material.owner === currentUser?._id) || [];

  return (
    <div className="profile">
      <div className="profile__container">
        <SideBar
          currentUser={currentUser}
          handleAddMaterial={handleAddMaterial}
          handleEditProfile={handleEditProfile}
          onSignOut={onSignOut}
        />
        <div className="profile__content">
          <h2 className="profile__title">Your Materials</h2>
          <div className="profile__materials">
            {userMaterials.map((material) => (
              <MaterialCard key={material._id} material={material} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
