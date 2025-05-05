import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose }) {
  return (
    <ModalWithForm
      className="LoginModal"
      title="Sign In"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="LoginModal__content">
        <form className="LoginModal__form">
          <input
            className="LoginModal__input"
            type="text"
            placeholder="Email"
          />
          <input
            className="LoginModal__input"
            type="password"
            placeholder="Password"
          />
          <button className="LoginModal__submit" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
