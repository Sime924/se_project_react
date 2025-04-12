import "./ItemModal.css";

function ItemModal({ activeModal, onCLose, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onCLose}
          type="button"
          className="modal__close modal__close_item-modal"
        ></button>
        <img src={card?.imageUrl} alt={card?.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer_content">
            <h2 className="modal__caption">{card?.name}</h2>
            <p className="modal__weather">Weather: {card?.weather}</p>
          </div>
          <button
            className="modal-close modal__delete-item_btn"
            type="button"
            onClick={onCLose}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
