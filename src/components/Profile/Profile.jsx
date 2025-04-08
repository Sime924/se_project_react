import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./profile.css";

function profile({ handleCardClick }) {
  return (
    <div>
      <section className="profile__sidebar"></section>
      <SideBar />
      <section className="profile__clothing-items">
        <ClothesSection handleCardClick={handleCardClick} />
      </section>
    </div>
  );
}

export default profile;
