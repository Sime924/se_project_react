import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

function SideBar({ handleSignOut }) {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default avatar" />
      <p className="sidebar__username">Simon Gebord</p>
      <button onClick={handleSignOut}>Log out</button>
    </div>
  );
}

export default SideBar;
