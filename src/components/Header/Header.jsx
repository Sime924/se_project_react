import "./Header.css";
import avatar from "../../assets/avatar.svg";
import logo from "../../assets/logo.svg";

function Header({ handleAddClick }) {
  return (
    <header className="header">
      <img src={logo} alt="" className="header__logo" />
      <p className="header__date-and-location">Date, Location</p>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Simon Gebord</p>
        <img src={avatar} alt="Simon Gebord" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
