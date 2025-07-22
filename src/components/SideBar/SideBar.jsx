import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

function SideBar({ handleSignOut }) {
  return (
    <div className="sidebar">
      <div className="sidebar__user-container">
        <img className="sidebar__avatar" src={avatar} alt="Default avatar" />
        <p className="sidebar__username">Simon Gebord</p>
      </div>
      <button className="sidebar__profile_data-btn">Change profile data</button>
      <button className="sidebar_logout-btn" onClick={handleSignOut}>
        Log out
      </button>
    </div>
  );
}

export default SideBar;
