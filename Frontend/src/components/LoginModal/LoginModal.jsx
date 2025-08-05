import { useState, useEffect } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (isOpen) {
      setError(""); // Clear error when modal opens
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    onSubmit({ email, password })
      .then(() => {
        setEmail("");
        setPassword("");
        onClose();
      })
      .catch((err) => {
        setError(err.message || "Email or Password invalid");
      });
  };

  return (
    <ModalWithForm title="Sign In" isOpen={isOpen} onClose={onClose}>
      <div className="LoginModal__content">
        <form className="LoginModal__form" onSubmit={handleSubmit}>
          <p className="LoginModal__error">{error || "\u00A0"}</p>
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
