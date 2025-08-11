import { useContext, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser?.name || "");
  const [avatar, setAvatar] = useState(currentUser?.avatar || "");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save Changes"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          onChange={handleNameChange}
          value={name}
        />
      </label>

      <label htmlFor="avatarUrl" className="modal__label">
        Avatar{" "}
        <input
          type="Url"
          className="modal__input"
          id="imageUrl"
          placeholder="Enter avatar URL"
          required
          onChange={handleAvatarChange}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}
