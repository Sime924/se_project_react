import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

function Profile({
  handleCardClick,
  clothingItems,
  handleAddClick,
  handleSignOut,
  handleCardLike,
  handleOpenChangeProfileDataModal,
}) {
  return (
    <div className="profile">
      <SideBar
        handleSignOut={handleSignOut}
        handleOpenChangeProfileDataModal={handleOpenChangeProfileDataModal}
      />
      <section className="profile__clothing-items">
        <ClothesSection
          handleAddClick={handleAddClick}
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
          handleCardLike={handleCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
