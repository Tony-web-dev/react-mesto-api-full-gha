export default function InfoTooltip({ isSuccess, isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container popup__login-container">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <div className={`popup__login-result ${!isSuccess ? 'popup__login-result_fail' : ''}`} />
        <h2 className="popup__login-title">{isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}</h2>
      </div>
    </div>
  );
}
