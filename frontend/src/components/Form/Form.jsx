export default function Form({ formHeading, textBtn, children, onSubmit, isSending }) {
return (
    <form className="form" onSubmit={onSubmit}>
        <h2 className="form__heading">{formHeading}</h2>
          <fieldset className="form__fieldset">
            {children}
            <button
              className={`form__save-button ${isSending && "form__save-button_disabled"}`}
              type="submit"
              disabled={isSending}
            >
              {textBtn || "Сохранить"}
            </button>
          </fieldset>
    </form>
)
}