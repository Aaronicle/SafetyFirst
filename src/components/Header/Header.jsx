import "./Header.css";
import "../../vender/fonts/fonts.css";
import Navigation from "../Navigation/Navigation";

function Header({ onSignInClick, onSignUpClick }) {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo_S">&nbsp;S&nbsp;</span>
        <span className="header__logo">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="header__logo_F">&nbsp;F&nbsp;</span>
      </div>
      <div className="header__title-wrap">
        <h1 className="header__title">
          <span className="header__title-safety">Safety</span>{" "}
          <span className="header__title-first">First</span>
        </h1>
        <Navigation />
      </div>
      <div className="header__btn-wrap">
        <button className="header__btn" onClick={onSignInClick}>
          Sign In
        </button>
        <button className="header__btn" onClick={onSignUpClick}>
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
