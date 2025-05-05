import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose }) {
  return (
    <ModalWithForm
      className="RegisterModal"
      title="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="RegisterModal__content">
        <form className="RegisterModal__form">
          <input
            className="RegisterModal__input"
            type="name"
            placeholder="Name"
            required
          />
          <input
            className="RegisterModal__input"
            type="text"
            placeholder="Email"
            required
          />
          <input
            className="RegisterModal__input"
            type="password"
            placeholder="Password"
            required
          />
          <button className="LoginModal__submit" type="submit">
            Create user
          </button>
        </form>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
