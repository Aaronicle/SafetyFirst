import "./MaterialCard.css";

const PPE_REQUIREMENTS = {
  A: ["Safety Glasses"],
  B: ["Safety Glasses", "Gloves"],
  C: ["Safety Glasses", "Gloves", "Apron"],
  D: ["Face Shield", "Gloves", "Apron"],
  E: ["Safety Glasses", "Gloves", "Dust Respirator"],
  F: ["Safety Glasses", "Gloves", "Apron", "Dust Respirator"],
  G: ["Safety Glasses", "Vapor Respirator"],
  H: ["Splash Goggles", "Gloves", "Apron", "Vapor Respirator"],
  I: ["Safety Glasses", "Gloves", "Dust/Vapor Respirator"],
  J: ["Splash Goggles", "Gloves", "Apron", "Dust/Vapor Respirator"],
  K: ["Airline Hood or Mask", "Gloves", "Full Suit", "Boots"],
  X: [
    "Ask Supervisor or Safety Specialist for Handling Instructions, or Refer to MSDS Sheet for Specific Directions",
  ],
};

function getRequiredPPE(ppeCode) {
  return PPE_REQUIREMENTS[ppeCode.toUpperCase()] || [];
}

function MaterialCard({
  material,
  setSelectedMaterial,
  setIsMaterialDetailModalOpen,
  onDeleteMaterial,
  currentUser,
}) {
  const requiredPPEList = getRequiredPPE(material.ppe);

  const handleCardClick = () => {
    console.log("Card clicked: ", material);
    setSelectedMaterial(material);
    setIsMaterialDetailModalOpen(true);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDeleteMaterial(material);
  };

  return (
    <div className="material-card" onClick={handleCardClick}>
      {material.owner === currentUser?._id && (
        <button className="material-card__delete-button" onClick={handleDelete}>
          ×
        </button>
      )}
      <h3 className="material-card__name">{material.name}</h3>
      <div className="material-card__hmis-list">
        <div className="material-card__hmis material-card__hmis--health">
          <span className="material-card__hmis-label">Health</span>
          <span className="material-card__hmis-value">{material.health}</span>
        </div>
        <div className="material-card__hmis material-card__hmis--flammability">
          <span className="material-card__hmis-label">Flammability</span>
          <span className="material-card__hmis-value">
            {material.flammability}
          </span>
        </div>
        <div className="material-card__hmis material-card__hmis--physical">
          <span className="material-card__hmis-label">Physical Hazard</span>
          <span className="material-card__hmis-value">{material.physical}</span>
        </div>
        <div className="material-card__hmis material-card__hmis--ppe">
          <span className="material-card__hmis-label">PPE</span>
          <span className="material-card__hmis-value">{material.ppe}</span>
        </div>
        <div className="material-card__ppe">
          <h4 className="material-card__ppe-title">Required PPE</h4>
          <div className="material-card__ppe-list">
            {requiredPPEList.map((item, index) => (
              <div key={index} className="material-card__ppe-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaterialCard;
