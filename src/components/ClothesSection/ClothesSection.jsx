import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, handleCardClick, handleAddClick }) {
  const { currentUser } = useContext(CurrentUserContext);
  console.log("Current User", currentUser);

  if (!currentUser || !currentUser._id) {
    return [];
  }
  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

  return (
    <div className="clothes-section">
      <div className="clothes-section__content">
        <p className="clothes-section__text">Your items</p>
        <button
          className="clothes-section__add-btn"
          type="button"
          onClick={handleAddClick}
        >
          + Add New
        </button>
      </div>
      <ul className="cards__list">
        {userItems?.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              // todo - pass as prop
              handleCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
