import "./Profile.css";
import SideBar from "../Sidebar/Sidebar";
import MaterialCard from "../MaterialCard/MaterialCard";
import MaterialDetailModal from "../MaterialDetailModal/MaterialDetailModal";
import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

function Profile({
  materials,
  handleEditProfile,
  onSignOut,
  handleAddMaterial,
  onDeleteMaterial,
}) {
  const { currentUser } = useContext(UserContext);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [isMaterialDetailModalOpen, setIsMaterialDetailModalOpen] =
    useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const userMaterials =
    materials?.filter((material) => material.owner === currentUser?._id) || [];
  const filteredMaterials = userMaterials.filter((material) =>
    material.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <div className="profile__materials">
            {filteredMaterials.map((material) => (
              <MaterialCard
                key={material._id}
                material={material}
                setSelectedMaterial={setSelectedMaterial}
                setIsMaterialDetailModalOpen={setIsMaterialDetailModalOpen}
                currentUser={currentUser}
                onDeleteMaterial={onDeleteMaterial}
              />
            ))}
          </div>
        </div>
      </div>
      <MaterialDetailModal
        isOpen={isMaterialDetailModalOpen}
        onClose={() => setIsMaterialDetailModalOpen(false)}
        selectedMaterial={selectedMaterial}
      />
    </div>
  );
}

export default Profile;
