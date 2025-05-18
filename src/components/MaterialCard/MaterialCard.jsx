import "./MaterialCard.css";

function MaterialCard({
  material,
  setSelectedMaterial,
  setIsMaterialDetailModalOpen,
}) {
  const handleCardClick = () => {
    console.log("Card clicked:", material);
    setSelectedMaterial(material);
    setIsMaterialDetailModalOpen(true);
  };

  return (
    <div className="material-card" onClick={handleCardClick}>
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
            {material.requiredPPE.map((item, index) => (
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
