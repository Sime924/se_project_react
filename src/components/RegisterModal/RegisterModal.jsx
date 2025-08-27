import { useState } from "react";
import { signin, signup } from "../../utils/auth";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  isOpen,
  onClose,
  handleRegistration,
  onSwitchToLogin,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarUrlChange = (e) => {
    setAvatar(e.target.value);
  };
  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    handleRegistration({ name, email, avatar, password });
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleRegistrationSubmit}
      switchButton={
        <button
          type="button"
          className="register_modal_switch-btn"
          onClick={onSwitchToLogin}
        >
          Or log in
        </button>
      }
    >
      <label htmlFor="register_email" className="modal__label-register">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="register_email"
          placeholder="email"
          required
          minLength="1"
          maxLength="30"
          onChange={handleEmailChange}
          value={email}
        />
      </label>

      <label htmlFor="password" className="modal__label-register">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="password"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>

      <label className="modal__label-regiter">
        Name{" "}
        <input
          id="name"
          type="text"
          name="name"
          className="modal__input"
          placeholder="Enter your name"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label className="modal__label-register">
        Avatar URL{" "}
        <input
          id="avatarUrl"
          type="url"
          name="avatarUrl"
          placeholder="Enter avatar Url"
          className="modal__input"
          onChange={handleAvatarUrlChange}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
