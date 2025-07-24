import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import likeButton from "../../assets/Like_button.png";

function ItemCard({ item, handleCardClick, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);

  const handleClick = () => {
    handleCardClick(item);
  };

  const isLiked =
    currentUser && item.likes.some((id) => id === currentUser._id);

  const handleLike = () => {
    onCardLike({ id: item._id, isLiked });
  };

  const itemLikeButtonClassName = `card__like-btn ${
    isLiked ? "card__like-btn_active" : ""
  }`;

  return (
    <li className="card">
      <div className="card__title-container">
        <h2 className="card__name">{item.name}</h2>
        {currentUser && (
          <button className={itemLikeButtonClassName} onClick={handleLike}>
            <img src={likeButton} alt="like" />
          </button>
        )}
      </div>
      <img
        onClick={handleClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
