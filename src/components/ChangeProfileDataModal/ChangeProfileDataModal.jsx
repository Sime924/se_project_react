import { useContext, useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./ChangeProfileDataModal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ChangeProfileDataModal({ isOpen, onClose, onChangeProfileData }) {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser?.name || "");
  const [avatar, setAvatar] = useState(currentUser?.avatar || "");

  useEffect(() => {
    setName(currentUser?.name || "");
    setAvatar(currentUser?.avatar || "");
  }, [currentUser]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleChangeProfileModalDataSubmit = (e) => {
    e.preventDefault();
    onChangeProfileData({ name, avatar });
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText={"Save Changes"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleChangeProfileModalDataSubmit}
    >
      <label className="modal__label">
        Name{""}
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
        Avatar{""}
        <input
          id="profile__avatar-change"
          type="url"
          className="modal__input"
          placeholder="Enter a valid Url"
          onChange={handleAvatarChange}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}

export default ChangeProfileDataModal;
