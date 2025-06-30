import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");

const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
};

const handleNameChange = (e) => {
  setName(e.target.value);
};

return (
  <ModalWithForm
    title="Sign up"
    buttonText="Sign up"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
  >
    <label htmlFor="email" className="modal__label">
      Email{" "}
      <input
        type="email"
        className="modal__input"
        id="email"
        placeholder="email"
        required
        minLength="1"
        maxLength="30"
        onChange={handleEmailChange}
        value={email}
      />
    </label>

    <label htmlFor="password" className="modal__label">
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
    <fieldset className="modal__radio-buttons">
      <legend className="modal__legend">Select the weather type:</legend>
      <label htmlFor="hot" className="modal__label modal__label_type_radio">
        <input
          id="hot"
          type="radio"
          name="weather"
          className="modal__radio-input"
          onChange={handleWeatherChange}
          checked={weather === "hot"}
          value="hot"
        />
        Hot
      </label>
      <label htmlFor="warm" className="modal__label modal__label_type_radio">
        <input
          id="warm"
          type="radio"
          name="weather"
          className="modal__radio-input"
          onChange={handleWeatherChange}
          checked={weather === "warm"}
          value="warm"
        />
        Warm
      </label>
      <label htmlFor="cold" className="modal__label modal__label_type_radio">
        <input
          id="cold"
          type="radio"
          name="weather"
          className="modal__radio-input"
          onChange={handleWeatherChange}
          checked={weather === "cold"}
          value="cold"
        />
        Cold
      </label>
    </fieldset>
  </ModalWithForm>
);
