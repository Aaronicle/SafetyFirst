import "./MaterialDetailModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

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

function MaterialDetailModal({ isOpen, onClose, selectedMaterial }) {
  if (!selectedMaterial) return null;

  const requiredPPEList = getRequiredPPE(selectedMaterial.ppe);

  const findPropertyValue = (propertyName) => {
    console.log(
      "Full experimental properties:",
      selectedMaterial.experimentalProperties
    );
    if (!selectedMaterial || !selectedMaterial.experimentalProperties) {
      return "";
    }
    const propertyObject = selectedMaterial.experimentalProperties.find(
      (prop) => prop.name === propertyName
    );
    console.log(`Property object for ${propertyName}:`, propertyObject);
    return propertyObject ? propertyObject.property : "";
  };
  console.log("Modal received material:", selectedMaterial);
  return (
    <ModalWithForm
      title={selectedMaterial.name}
      isOpen={isOpen}
      onClose={onClose}
      hideSubmit={true} // Since this is just for display
    >
      <div className="material-detail">
        {/* HMIS Section */}
        <section className="material-detail__section material-detail__hmis">
          <h3>HMIS Ratings</h3>
          <div className="material-detail__hmis-grid">
            <div className="material-detail__hmis-item">
              <span className="material-detail__label">Health:</span>
              <span className="material-detail__value">
                {selectedMaterial.health}
              </span>
            </div>
            <div className="material-detail__hmis-item">
              <span className="material-detail__label">Flammability:</span>
              <span className="material-detail__value">
                {selectedMaterial.flammability}
              </span>
            </div>
            <div className="material-detail__hmis-item">
              <span className="material-detail__label">Physical Hazard:</span>
              <span className="material-detail__value">
                {selectedMaterial.physical}
              </span>
            </div>
            <div className="material-detail__hmis-item">
              <span className="material-detail__label">PPE Code:</span>
              <span className="material-detail__value">
                {selectedMaterial.ppe}
              </span>
            </div>
          </div>
        </section>

        {/* Required PPE Section */}
        <section className="material-detail__section">
          <h3>Required PPE</h3>
          <div className="material-detail__ppe-list">
            {requiredPPEList.map((item, index) => (
              <div key={index} className="material-detail__ppe-item">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Chemical Properties Section */}
        <section className="material-detail__section">
          <h3>Chemical Properties</h3>
          <div className="material-detail__properties">
            {selectedMaterial.rn && (
              <div className="material-detail__property">
                <span className="material-detail__label">CAS Number:</span>
                <span className="material-detail__value">
                  {selectedMaterial.rn}
                </span>
              </div>
            )}
            {selectedMaterial.molecularFormula && (
              <div className="material-detail__property">
                <span className="material-detail__label">
                  Molecular Formula:
                </span>
                <span className="material-detail__value">
                  {selectedMaterial.molecularFormula}
                </span>
              </div>
            )}
            {/* Use the findPropertyValue function for experimental properties */}
            {findPropertyValue("Boiling Point") && (
              <div className="material-detail__property">
                <span className="material-detail__label">Boiling Point:</span>
                <span className="material-detail__value">
                  {findPropertyValue("Boiling Point")}
                </span>
              </div>
            )}
            {findPropertyValue("Melting Point") && (
              <div className="material-detail__property">
                <span className="material-detail__label">Melting Point:</span>
                <span className="material-detail__value">
                  {findPropertyValue("Melting Point")}
                </span>
              </div>
            )}
            {findPropertyValue("Density") && (
              <div className="material-detail__property">
                <span className="material-detail__label">Density:</span>
                <span className="material-detail__value">
                  {findPropertyValue("Density")}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Synonyms Section (if available) */}
        {selectedMaterial.synonyms && selectedMaterial.synonyms.length > 0 && (
          <section className="material-detail__section">
            <h3>Alternative Names</h3>
            <div className="material-detail__synonyms">
              {selectedMaterial.synonyms.map((synonym, index) => (
                <div key={index} className="material-detail__synonym-item">
                  {synonym}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>{" "}
    </ModalWithForm>
  );
}

export default MaterialDetailModal;
