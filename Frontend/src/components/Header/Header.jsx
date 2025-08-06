import "./Header.css";
import "../../vender/fonts/fonts.css";
import Navigation from "../Navigation/Navigation";

function Header({
  onSignInClick,
  onSignUpClick,
  isLoggedIn,
  onSignOutClick,
  onAddMaterialClick,
}) {
  return (
    <header className="Header">
      <div className="Header__logo">
        <span className="Header__logo_S">&nbsp;S&nbsp;</span>
        <span className="Header__logo">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="Header__logo_F">&nbsp;F&nbsp;</span>
      </div>
      <div className="Header__title-wrap">
        <h1 className="Header__title">
          <span className="Header__title-safety">Safety</span>{" "}
          <span className="Header__title-first">First</span>
        </h1>
        <Navigation />
      </div>
      <div className="Header__btn-wrap">
        {isLoggedIn ? (
          <>
            <button
              className="Header__btn Header__btn_add"
              onClick={onAddMaterialClick}
            >
              Add Material
            </button>{" "}
            <button className="Header__btn" onClick={onSignOutClick}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <button className="Header__btn" onClick={onSignInClick}>
              Sign In
            </button>
            <button className="Header__btn" onClick={onSignUpClick}>
              Sign Up
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
