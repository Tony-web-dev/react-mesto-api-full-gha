import Form from "../Form/Form.jsx";
import Popup from "../Popup/Popup.jsx";

export default function PopupWithForm({ name, formHeading, textBtn, children, isOpen, onClose, onSubmit, isSending }) {
  return (
    <Popup
    name={name}
    isOpen={isOpen}
    onClose={onClose}
    >
        <Form
        textBtn={textBtn}
        children={children}
        isSending={isSending}
        formHeading={formHeading}
        onSubmit={onSubmit}
        />
    </Popup>
  );
}
