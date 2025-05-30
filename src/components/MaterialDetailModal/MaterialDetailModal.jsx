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
      <div className="MaterialDetailModal">
        {/* HMIS Section */}
        <section className="MaterialDetailModal__section MaterialDetailModal__hmis">
          <h3>HMIS Ratings</h3>
          <div className="MaterialDetailModal__hmis-grid">
            <div className="MaterialDetailModal__hmis-item">
              <span className="MaterialDetailModal__label">Health:</span>
              <span className="MaterialDetailModal__value">
                {selectedMaterial.health}
              </span>
            </div>
            <div className="MaterialDetailModal__hmis-item">
              <span className="MaterialDetailModal__label">Flammability:</span>
              <span className="MaterialDetailModal__value">
                {selectedMaterial.flammability}
              </span>
            </div>
            <div className="MaterialDetailModal__hmis-item">
              <span className="MaterialDetailModal__label">
                Physical Hazard:
              </span>
              <span className="MaterialDetailModal__value">
                {selectedMaterial.physical}
              </span>
            </div>
            <div className="MaterialDetailModal__hmis-item">
              <span className="MaterialDetailModal__label">PPE Code:</span>
              <span className="MaterialDetailModal__value">
                {selectedMaterial.ppe}
              </span>
            </div>
          </div>
        </section>

        {/* Required PPE Section */}
        <section className="MaterialDetailModal__section">
          <h3>Required PPE</h3>
          <div className="MaterialDetailModal__ppe-list">
            {requiredPPEList.map((item, index) => (
              <div key={index} className="MaterialDetailModal__ppe-item">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Chemical Properties Section */}
        <section className="MaterialDetailModal__section">
          <h3>Chemical Properties</h3>
          <div className="MaterialDetailModal__properties">
            {selectedMaterial.rn && (
              <div className="MaterialDetailModal__property">
                <span className="MaterialDetailModal__label">CAS Number:</span>
                <span className="MaterialDetailModal__value">
                  {selectedMaterial.rn}
                </span>
              </div>
            )}
            {selectedMaterial.molecularFormula && (
              <div className="MaterialDetailModal__property">
                <span className="MaterialDetailModal__label">
                  Molecular Formula:
                </span>
                <span className="MaterialDetailModal__value">
                  {selectedMaterial.molecularFormula}
                </span>
              </div>
            )}
            {/* Use the findPropertyValue function for experimental properties */}
            {findPropertyValue("Boiling Point") && (
              <div className="MaterialDetailModal__property">
                <span className="MaterialDetailModal__label">
                  Boiling Point:
                </span>
                <span className="MaterialDetailModal__value">
                  {findPropertyValue("Boiling Point")}
                </span>
              </div>
            )}
            {findPropertyValue("Melting Point") && (
              <div className="MaterialDetailModal__property">
                <span className="MaterialDetailModal__label">
                  Melting Point:
                </span>
                <span className="MaterialDetailModal__value">
                  {findPropertyValue("Melting Point")}
                </span>
              </div>
            )}
            {findPropertyValue("Density") && (
              <div className="MaterialDetailModal__property">
                <span className="MaterialDetailModal__label">Density:</span>
                <span className="MaterialDetailModal__value">
                  {findPropertyValue("Density")}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Synonyms Section (if available) */}
        {selectedMaterial.synonyms && selectedMaterial.synonyms.length > 0 && (
          <section className="MaterialDetailModal__section">
            <h3>Alternative Names</h3>
            <div className="MaterialDetailModal__synonyms">
              {selectedMaterial.synonyms.map((synonym, index) => (
                <div key={index} className="MaterialDetailModal__synonym-item">
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
