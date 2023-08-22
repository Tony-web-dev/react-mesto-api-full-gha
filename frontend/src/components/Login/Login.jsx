import useForm from "../../utils/useForm.js";

export default function Login({ handleLogin, isSending }) {
  const { values, errors, handleChange } = useForm();

  function onLogin(e) {
    e.preventDefault();
    handleLogin(values.email, values.password);
  }

  return (
    <section className="gate">
      <form className="gate__form" name="signin" onSubmit={onLogin}>
        <h2 className="gate__heading">Вход</h2>
        <fieldset className="gate__fieldset">
          <label className="gate__label">
            <input
              className="gate__input"
              name="email"
              type="email"
              placeholder={"Email"}
              value={values.email}
              onChange={handleChange}
              required
            />
            <span className="gate__message-error">{errors.email}</span>
          </label>
          <label className="gate__label">
            <input
              className="gate__input"
              name="password"
              type="password"
              placeholder={"Пароль"}
              minLength={5}
              value={values.password}
              onChange={handleChange}
              required
            />
            <span className="gate__message-error">{errors.password}</span>
          </label>
          <button
              className={`gate__save-button ${isSending && "gate__save-button_disabled"}`}
              type="submit"
              disabled={isSending}
            >Войти</button>
        </fieldset>  
      </form>
    </section>
  );
}
