import "./ModalWithForm.css";

function ModalWithForm({ isOpen, onClose, title, children }) {
  return (
    <div className={`ModalWithForm ${isOpen ? "ModalWithForm_opened" : ""}`}>
      <div className="ModalWithForm__content">
        <button className="ModalWithForm__close" onClick={onClose}>
          X
        </button>
        <h2 className="ModalWithForm__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default ModalWithForm;
