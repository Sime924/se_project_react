import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./profile.css";

function profile({ handleCardClick, clothingItems }) {
  return (
    <div className="profile">
      <section className="profile__sidebar"></section>
      <SideBar />
      <section className="profile__clothing-items">
        <ClothesSection
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
        />
      </section>
    </div>
  );
}

export default profile;
