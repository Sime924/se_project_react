import "./Header.css";
import avatar from "../../assets/avatar.svg";
import { useContext } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  handleOpenRegisterModal,
  handleShowLoginModal,
}) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <img src={logo} alt="Header-logo" className="header__logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
        <ToggleSwitch />
        {isLoggedIn ? (
          <Link to="/profile" className="header__link">
            <div className="header__user-container">
              <button
                className="header__add-clothes-btn"
                onClick={handleAddClick}
              >
                + Add clothes
              </button>
              <p className="header__username">{currentUser?.name}</p>
              <img
                src={currentUser?.avatar}
                alt={currentUser?.name}
                className="header__avatar"
              />
            </div>
          </Link>
        ) : (
          <div className="header__auth-container">
            <button
              className="header__register-btn"
              onClick={handleOpenRegisterModal}
            >
              Sign Up
            </button>
            <button
              className="header__login-btn"
              onClick={handleShowLoginModal}
            >
              log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
