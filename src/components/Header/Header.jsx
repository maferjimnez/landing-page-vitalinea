import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import vitalineaLogo from "../../assets/logos/vitalinea_color_logo.png";

const Header = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <header className="Header__wrapper">
      <div className="Header__container">
        <div className="logo__wrapper">
          <img src={vitalineaLogo} alt="Vitalinea logo" />
        </div>
        <button
          className="MobileMenu__icon"
          onClick={() => {
            updateMenu();
          }}
        >
          <span
            className={
              !isMenuClicked
                ? "MobileMenu__icon--line"
                : "MobileMenu__icon--line menuClicked"
            }
          ></span>
        </button>
      </div>
      <NavBar isHidden={isMenuHidden} />
    </header>
  );
};

export default Header;
