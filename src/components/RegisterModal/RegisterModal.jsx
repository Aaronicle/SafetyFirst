import { useState } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { name, email, password });
    onSubmit({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
    onClose();
  };

  return (
    <ModalWithForm
      className="RegisterModal"
      title="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="RegisterModal__content">
        <form className="RegisterModal__form" onSubmit={handleSubmit}>
          <input
            className="RegisterModal__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            className="RegisterModal__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className="RegisterModal__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button className="RegisterModal__submit" type="submit">
            Create user
          </button>
        </form>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
