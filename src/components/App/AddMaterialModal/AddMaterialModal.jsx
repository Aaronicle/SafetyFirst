import "./AddMaterialModal.css";
import ModalWithForm from "../../ModalWithForm/ModalWithForm";
import { useState } from "react";

function AddMaterialModal({ isOpen, onClose, onSubmit }) {
  const [casError, setCasError] = useState("");
  const [materialData, setMaterialData] = useState({
    name: "",
    health: "0",
    flammability: "0",
    physical: "0",
    ppe: "A",
    casNumber: "",
    requiredPPE: [],
    molecularFormula: "",
    boilingPoint: "",
    meltingPoint: "",
    density: "",
    image: "",
    synonyms: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    if (name === "casNumber") {
      setCasError("");
    }
    setMaterialData({
      ...materialData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // If there's a CAS number, fetch the chemical data first
    if (materialData.casNumber) {
      setIsLoading(true);
      try {
        const trimmedCasNumber = materialData.casNumber.trim();
        const response = await fetch(
          `https://commonchemistry.cas.org/api/detail?cas_rn=${encodeURIComponent(
            trimmedCasNumber
          )}`
        );
        if (response.ok) {
          const data = await response.json();

          // API Data Extraction
          const boilingPoint =
            data.experimentalProperties?.find(
              (prop) => prop.name === "Boiling Point"
            )?.property || "";
          const meltingPoint =
            data.experimentalProperties?.find(
              (prop) => prop.name === "Melting Point"
            )?.property || "";
          const density =
            data.experimentalProperties?.find((prop) => prop.name === "Density")
              ?.property || "";

          const updatedMaterialData = {
            ...materialData,
            name: materialData.name || data.name,
            molecularFormula: data.molecularFormula || "",
            experimentalProperties: data.experimentalProperties || [],
            boilingPoint,
            meltingPoint,
            density,
            image: data.image || "",
            synonyms: data.synonyms || [],
          };

          setCasError("");
          onSubmit(updatedMaterialData);
        } else {
          setCasError("CAS number not found.");
          setIsLoading(false);
          return;
        }
      } catch (error) {
        console.error("Error fetching chemical data:", error);
        setCasError("Error fetching chemical data. Please try again.");
        setIsLoading(false);
        return;
      } finally {
        setIsLoading(false);
      }
    } else {
      // If no CAS number, just submit the form as is
      onSubmit(materialData);
    }
  };
  return (
    <ModalWithForm title="Add New Material" isOpen={isOpen} onClose={onClose}>
      <form className="add-material-form" onSubmit={handleSubmit}>
        {/* Material Name - Text Input */}
        <label className="add-material-form__label">
          Material Name
          <input
            type="text"
            name="name"
            value={materialData.name}
            onChange={handleInputChange}
            className="add-material-form__input"
            required
          />
        </label>

        {/* HMIS Ratings - Dropdowns */}
        <label className="add-material-form__label">
          Health
          <select
            name="health"
            value={materialData.health}
            onChange={handleInputChange}
            className="add-material-form__select"
            required
          >
            {[0, 1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>

        <label className="add-material-form__label">
          Flammability
          <select
            name="flammability"
            value={materialData.flammability}
            onChange={handleInputChange}
            className="add-material-form__select"
            required
          >
            {[0, 1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>

        <label className="add-material-form__label">
          Physical Hazard
          <select
            name="physical"
            value={materialData.physical}
            onChange={handleInputChange}
            className="add-material-form__select"
            required
          >
            {[0, 1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>

        <label className="add-material-form__label">
          Personal Protection
          <select
            name="ppe"
            value={materialData.ppe}
            onChange={handleInputChange}
            className="add-material-form__select"
            required
          >
            {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "X"].map(
              (letter) => (
                <option key={letter} value={letter}>
                  {letter}
                </option>
              )
            )}
          </select>
        </label>

        {/* CAS Number - Optional Text Input */}
        <label className="add-material-form__label">
          CAS Number (Optional)
          <input
            type="text"
            name="casNumber"
            value={materialData.casNumber}
            onChange={handleInputChange}
            className="add-material-form__input"
          />
          {isLoading && <span>Loading...</span>}
          {casError && (
            <span className="add-material-form__error">{casError}</span>
          )}
        </label>
        <button className="add-material-form__submit" type="submit">
          Add Material
        </button>
      </form>
    </ModalWithForm>
  );
}

export default AddMaterialModal;
