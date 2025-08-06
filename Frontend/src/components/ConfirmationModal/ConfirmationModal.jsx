import "./ConfirmationModal.css";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <div
      className={`ConfirmationModal ${
        isOpen ? "ConfirmationModal_opened" : ""
      }`}
    >
      <div className="ConfirmationModal__container">
        <button
          type="button"
          className="ConfirmationModal__close-button"
          onClick={onClose}
        />
        <p className="ConfirmationModal__text">
          Are you sure you want to delete this material?
        </p>
        <div className="ConfirmationModal__buttons">
          <button
            type="button"
            className="ConfirmationModal__button ConfirmationModal__button_type_confirm"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            type="button"
            className="ConfirmationModal__button ConfirmationModal__button_type_cancel"
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
