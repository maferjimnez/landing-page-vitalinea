import React from "react";
import facebookIcon from "../../../assets/icons/facebook_icon.png";
import instagramIcon from "../../../assets/icons/instagram_icon.png";
import youtubeIcon from "../../../assets/icons/youtube_icon.png";

const NavBar = (props) => {
  const { isHidden } = props;
  return (
    <nav
      className={isHidden ? "NavBar__container hidden" : "NavBar__container"}
    >
      <ul className="NavBarList__container">
        <li className="NavBar__item">
          <a href="#VitalineaFamily">Nuestros productos</a>
        </li>
        <li className="NavBar__item">
          <a href="#NutritionalInfo">Disfruta cuidarte</a>
        </li>
        <li className="NavBar__item">
          <a href="https://www.vitalinea.com.mx/blog/" target="_blank">
            Blog
          </a>
        </li>
        <li className="NavBar_socials">
          <a href="https://www.facebook.com/VitalineaMX/" target="_blank">
            <img src={facebookIcon} alt="Facebook logo icon" />
          </a>
          <a href="https://www.instagram.com/vitalineamx/" target="_blank">
            <img src={instagramIcon} alt="Instagram logo icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCQ9QUtKWouX6TaAXyeOwb_Q"
            target="_blank"
          >
            <img src={youtubeIcon} alt="Youtube logo icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
