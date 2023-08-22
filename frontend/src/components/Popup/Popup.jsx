export default function Popup({ isOpen, onClose, children }) {
    return (
      <div className={`popup ${isOpen && "popup_opened"}`}>
        <div className="popup__container">
          <button
            className="popup__close-button"
            type="button"
            aria-label="Закрыть"
            onClick={onClose}
          />
          {children}
        </div>
      </div>
    );
  }
  