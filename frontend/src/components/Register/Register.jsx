import useForm from "../../utils/useForm.js";
import { Link } from "react-router-dom";

export default function Register({ handleRegister, isSending }) {
    const { values, errors, handleChange } = useForm();

    function onRegister(e) {
        e.preventDefault();
        handleRegister(values.email, values.password);
    }

    return (
      <section className="gate">
        <form className="gate__form" name="signup" onSubmit={onRegister}>
          <h2 className="gate__heading">Регистрация</h2>
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
            >Зарегистрироваться</button>
            <p className="gate__subtitle">Уже зарегистрированы?
            <Link to={"/sign-in"} className="gate__subtitle-link"> Войти</Link>
            </p>
          </fieldset>    
        </form>
      </section>
    );
}