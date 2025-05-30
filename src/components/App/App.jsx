import "./App.css";
import Header from "../Header/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import AddMaterialModal from "../AddMaterialModal/AddMaterialModal";
import MaterialDetailModal from "../MaterialDetailModal/MaterialDetailModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import UserContext from "../../contexts/UserContext";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import About from "../About/About";
import "../../vender/fonts/fonts.css";
import { fetchChemicalData } from "../../utils/api";
import initialMaterialData from "../../utils/constants";

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
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [materialToDelete, setMaterialToDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [casError, setCasError] = useState("");
  const [materialData, setMaterialData] = useState(initialMaterialData);

  useEffect(() => {
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
  const handleOpenConfirmModal = (material) => {
    setMaterialToDelete(material);
    setIsConfirmModalOpen(true);
  };
  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
    setMaterialToDelete(null);
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

  const handleEditProfileSubmit = (values) => {
    setCurrentUser({
      ...currentUser,
      ...values,
    });
    handleCloseEditProfileModal();
  };

  const handleDeleteMaterial = () => {
    if (materialToDelete) {
      setMaterials(materials.filter((item) => item.id !== materialToDelete.id));
      handleCloseConfirmModal();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "casNumber") {
      setCasError("");
    }
    setMaterialData({
      ...materialData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (materialData.casNumber) {
      setIsLoading(true);
      const trimmedCasNumber = materialData.casNumber.trim();
      fetchChemicalData(trimmedCasNumber)
        .then((data) => {
          const updatedMaterialData = {
            ...materialData,
            name: materialData.name || data.name,
            molecularFormula: data.molecularFormula || "",
            molecularMass: data.molecularMass || "",
            canonicalSmiles: data.canonicalSmiles || "",
            inchi: data.inchi || "",
            inchiKey: data.inchiKey || "",
            synonyms: data.synonyms || [],
          };

          setCasError("");
          handleAddMaterial(updatedMaterialData);
          setMaterialData(initialMaterialData);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching chemical data:", error);
          setCasError("Error fetching chemical data. Please try again.");
          setIsLoading(false);
        });
    } else {
      // If no CAS number, just submit the form as is
      handleAddMaterial(materialData);
      setMaterialData(initialMaterialData);
    }
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
    <HashRouter>
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
                    onDeleteMaterial={handleOpenConfirmModal}
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
                    onDeleteMaterial={handleOpenConfirmModal}
                  />
                }
              ></Route>
              <Route path="/about" element={<About />}></Route>
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
              onSubmit={handleSubmit}
              materialData={materialData}
              handleInputChange={handleInputChange}
              casError={casError}
              isLoading={isLoading}
            />
            <MaterialDetailModal
              isOpen={isMaterialDetailModalOpen}
              onClose={handleCloseMaterialDetailModal}
              selectedMaterial={selectedMaterial}
            />
            <EditProfileModal
              isOpen={isEditProfileModalOpen}
              onClose={handleCloseEditProfileModal}
              onSubmit={handleEditProfileSubmit}
              currentUser={currentUser}
            />
            <ConfirmationModal
              isOpen={isConfirmModalOpen}
              onClose={handleCloseConfirmModal}
              onConfirm={handleDeleteMaterial}
            />
          </div>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
