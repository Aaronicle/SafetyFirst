import { useState } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { email, password });
    onSubmit({ email, password });
    setEmail("");
    setPassword("");
    onClose();
  };

  return (
    <ModalWithForm title="Sign In" isOpen={isOpen} onClose={onClose}>
      <div className="LoginModal__content">
        <form className="LoginModal__form" onSubmit={handleSubmit}>
          <input
            className="LoginModal__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className="LoginModal__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
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
