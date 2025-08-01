import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./ChangeProfileDataModal.css";

function ChangeProfileDataModal({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleChangeProfileModalDataSubmit = (e) => {
    e.preventDefault();
    //add the handler to change the profile data
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText={"Save Changes"}
      isOpen={isOpen}
      isClose={isClose}
      onSubmit={handleChangeProfileModalDataSubmit}
    >
      <label className="modal__label">
        ProfileNameChange{""}
        <input
          id="profile__name-change"
          type="text"
          className="modal__input"
          placeholder="Enter Name"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label className="modal__label">
        ProfileAvatarChange{""}
        <input
          id="profile__avatar-change"
          type="url"
          className="modal__input"
          placeholder="Enter a valid url"
          onChange={handleAvatarChange}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}

export default ChangeProfileDataModal;
