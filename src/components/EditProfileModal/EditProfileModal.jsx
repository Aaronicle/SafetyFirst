import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import "./EditProfileModal.css";

function EditProfileModal({ isOpen, onClose, onSubmit, currentUser }) {
  const [name, setName] = useState(currentUser?.name || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
  };

  return (
    <ModalWithForm
      title="Edit Profile"
      buttonText="Save changes"
      isOpen={isOpen}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="edit-profile-form">
        <label className="edit-profile-form__label">
          Name
          <input
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="edit-profile-form__input"
          />
        </label>
        <button type="submit" className="edit-profile-form__submit">
          Save changes
        </button>
      </form>
    </ModalWithForm>
  );
}

export default EditProfileModal;
