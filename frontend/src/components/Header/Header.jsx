import { Link, Route, Routes } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function Header({ loggedUser }) {
  function onSignOut() {
    localStorage.removeItem("jwt");
  }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <div className="header__loginbox">
        <Routes>
          <Route path="sign-up" element={<Link to='/sign-in' className="header__link">Войти</Link>} />
          <Route path="sign-in" element={<Link to='/sign-up' className="header__link">Регистрация</Link>} />
          <Route path="/" element={
          <>
            <p className="header__logged">{loggedUser}</p>
            <Link to='/sign-in' className="header__link" onClick={onSignOut}>Выйти</Link>
          </>
          } />
        </Routes>
      </div>
    </header>
  );
}
