import { useContext } from "react";
import { defaultClothingItems } from "../../utils/constants";
import "./ItemModal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, onClose, card, handleDeleteCard }) {
  const { currentUser } = useContext(CurrentUserContext);

  const isOwn = currentUser && card.owner === currentUser.currentUser._id;

  const itemDeleteButtonClassName = `modal__delete-item_btn ${
    isOwn ? "" : "modal__delete-item_btn_hidden"
  }`;

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close_item-modal"
        ></button>
        <img src={card?.imageUrl} alt={card?.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer_content">
            <h2 className="modal__caption">{card?.name}</h2>
            <p className="modal__weather">Weather: {card?.weather}</p>
          </div>
          {isOwn && (
            <button
              className="modal-close modal__delete-item_btn"
              type="button"
              onClick={handleDeleteCard}
            >
              Delete Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
