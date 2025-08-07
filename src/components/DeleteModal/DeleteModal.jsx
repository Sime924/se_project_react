import { useState } from "react";
import "./DeleteModal.css";

function DeleteModal({ isOpen, onClose, handleOnConfirm, handleDeleteCard }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type-confirmation">
        <h2 className="delete__modal_title">
          Are you sure you want to delete this item?{" "}
        </h2>
        <h2 className="delete__modal_text">This action is irreversable</h2>
        <button className="modal__close" type="button" onClick={onClose}>
          {" "}
        </button>
        <button
          className="delete__modal_btn"
          type="button"
          onClick={handleDeleteCard}
        >
          Yes, delete item
        </button>
        <button className="delete__modal_cancel-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
