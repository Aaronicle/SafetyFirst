import "./App.css";
import Header from "../Header/Header";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import AddMaterialModal from "./AddMaterialModal/AddMaterialModal";
import MaterialDetailModal from "../MaterialDetailModal/MaterialDetailModal";
import UserContext from "../../contexts/UserContext";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import "../../vender/fonts/fonts.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isMaterialDetailModalOpen, setIsMaterialDetailModalOpen] =
    useState(false);
  const [isAddMaterialModalOpen, setIsAddMaterialModalOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [materials, setMaterials] = useState([]);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  useEffect(() => {
    // Load materials from localStorage when the app starts
    const savedMaterials = localStorage.getItem("materials");
    if (savedMaterials) {
      setMaterials(JSON.parse(savedMaterials));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("materials", JSON.stringify(materials));
  }, [materials]);

  const handleOpenLoginModal = () => setIsLoginModalOpen(true);
  const handleCloseLoginModal = () => setIsLoginModalOpen(false);
  const handleOpenRegisterModal = () => setIsRegisterModalOpen(true);
  const handleCloseRegisterModal = () => setIsRegisterModalOpen(false);
  const handleOpenAddMaterialModal = () => setIsAddMaterialModalOpen(true);
  const handleCloseAddMaterialModal = () => setIsAddMaterialModalOpen(false);
  const handleOpenMaterialDetailModal = () =>
    setIsMaterialDetailModalOpen(true);
  const handleCloseMaterialDetailModal = () =>
    setIsMaterialDetailModalOpen(false);
  const handleOpenEditProfileModal = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleCloseEditProfileModal = () => {
    setIsEditProfileModalOpen(false);
  };

  const handleSignOutClick = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleRegisterSubmit = (values) => {
    setCurrentUser(values);
    setIsLoggedIn(true);
    handleCloseRegisterModal();
  };

  const handleLoginSubmit = (values) => {
    setCurrentUser(values);
    setIsLoggedIn(true);
    handleCloseLoginModal();
  };

  const handleAddMaterial = (newMaterial) => {
    const materialToAdd = {
      id: Date.now(), // Add a unique ID
      name: newMaterial.name,
      health: newMaterial.health,
      flammability: newMaterial.flammability,
      physical: newMaterial.physical,
      ppe: newMaterial.ppe,
      requiredPPE: newMaterial.requiredPPE || [],
      casNumber: newMaterial.casNumber,
      molecularFormula: newMaterial.molecularFormula,
      experimentalProperties: newMaterial.experimentalProperties,
      synonyms: newMaterial.synonyms,
    };
    setMaterials([...materials, materialToAdd]);
    handleCloseAddMaterialModal();
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">
          <div className="App__content">
            <Header
              isLoggedIn={isLoggedIn}
              onSignInClick={handleOpenLoginModal}
              onSignUpClick={handleOpenRegisterModal}
              onSignOutClick={handleSignOutClick}
              onAddMaterialClick={handleOpenAddMaterialModal}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    isMaterialDetailModalOpen={isMaterialDetailModalOpen}
                    setIsMaterialDetailModalOpen={setIsMaterialDetailModalOpen}
                    isAddMaterialModalOpen={isAddMaterialModalOpen}
                    setIsAddMaterialModalOpen={setIsAddMaterialModalOpen}
                    selectedMaterial={selectedMaterial}
                    setSelectedMaterial={setSelectedMaterial}
                    materials={materials}
                  />
                }
              ></Route>
              <Route
                path="/profile"
                element={
                  <Profile
                    materials={materials}
                    handleAddMaterial={handleOpenAddMaterialModal}
                    onSignOut={handleSignOutClick}
                    handleEditProfile={handleOpenEditProfileModal}
                  />
                }
              ></Route>
            </Routes>
            <Footer />
            <LoginModal
              isOpen={isLoginModalOpen}
              onClose={handleCloseLoginModal}
              onSubmit={handleLoginSubmit}
            />
            <RegisterModal
              isOpen={isRegisterModalOpen}
              onClose={handleCloseRegisterModal}
              onSubmit={handleRegisterSubmit}
            />
            <AddMaterialModal
              isOpen={isAddMaterialModalOpen}
              onClose={handleCloseAddMaterialModal}
              onSubmit={handleAddMaterial}
            />
            <MaterialDetailModal
              isOpen={isMaterialDetailModalOpen}
              onClose={handleCloseMaterialDetailModal}
              selectedMaterial={selectedMaterial}
            />
          </div>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
