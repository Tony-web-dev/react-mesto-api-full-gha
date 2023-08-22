import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function DeletePlacePopup({ isOpen, onClose, onSubmit, isSending }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <PopupWithForm
      formHeading="Вы уверены?"
      textBtn="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSending={isSending}
    />
  );
}
