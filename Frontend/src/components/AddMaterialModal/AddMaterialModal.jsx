import "./AddMaterialModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddMaterialModal({
  isOpen,
  onClose,
  onSubmit,
  materialData,
  handleInputChange,
  casError,
  isLoading,
}) {
  return (
    <ModalWithForm title="Add New Material" isOpen={isOpen} onClose={onClose}>
      <form className="add-material-form" onSubmit={onSubmit}>
        {/* Material Name - Text Input */}
        <label className="add-material-form__label">
          Material Name
          <input
            type="text"
            name="name"
            placeholder="example: Formaldyhyde"
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

        {/* CAS Number-Optional Text Input */}
        <label className="add-material-form__label">
          CAS Number (Optional)
          <input
            type="text"
            name="casNumber"
            placeholder="example: 50-00-0"
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
