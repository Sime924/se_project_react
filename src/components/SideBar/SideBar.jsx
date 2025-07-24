import "./SideBar.css";
import avatar from "../../assets/avatar.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function SideBar({ handleSignOut }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__user-container">
        <img
          className="sidebar__avatar"
          src={currentUser?.avatar}
          alt="Default avatar"
        />
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <button className="sidebar__profile_data-btn">Change profile data</button>
      <button className="sidebar_logout-btn" onClick={handleSignOut}>
        Log out
      </button>
    </div>
  );
}

export default SideBar;
