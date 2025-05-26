import "./ConfirmationModal.css";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <div
      className={`confirmation-modal ${
        isOpen ? "confirmation-modal_opened" : ""
      }`}
    >
      <div className="confirmation-modal__container">
        <button
          type="button"
          className="confirmation-modal__close-button"
          onClick={onClose}
        />
        <p className="confirmation-modal__text">
          Are you sure you want to delete this material?
        </p>
        <div className="confirmation-modal__buttons">
          <button
            type="button"
            className="confirmation-modal__button confirmation-modal__button_type_confirm"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            type="button"
            className="confirmation-modal__button confirmation-modal__button_type_cancel"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
