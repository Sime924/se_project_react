import { useState } from "react";
import { signin, signup } from "../../utils/auth";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, handleSignIn, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginModalSubmit = (e) => {
    e.preventDefault();
    handleSignIn({ email, password });
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleLoginModalSubmit}
    >
      <label className="modal__label-login">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="login_modal-email"
          placeholder="email"
          required
          minLength="1"
          maxLength="30"
          onChange={handleEmailChange}
          value={email}
        />
      </label>

      <label className="modal__label-login">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="login_modal-password"
          placeholder="password"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <button
        type="button"
        className="login__modal_switch-btn"
        onClick={onSwitchToRegister}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
}

export default LoginModal;
