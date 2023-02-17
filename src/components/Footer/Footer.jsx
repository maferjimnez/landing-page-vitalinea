import React from "react";
import danone_logo from "../../assets/logos/danone_logo.png";
import vitalinea_black_and_white_logo from "../../assets/logos/vitalinea_black_and_white_logo.png";

const Footer = () => {
  return (
    <div className="Footer__container">
      <div className="FooterIcons__container">
        <div className="FooterIcons__wrapper">
          <img src={danone_logo} alt="Danone logo" />
        </div>
        <div className="FooterIcons__wrapper">
          <img
            src={vitalinea_black_and_white_logo}
            alt="Vitalinea logo - black and white"
          />
        </div>
      </div>
      <div className="FooterTermsAndConditions__container">
        <p>
          Términos y condiciones | Políticas de privacidad | Aviso de privacidad
        </p>
        <p>Danone de México 2017 ©. Todos los derechos reservados 2017</p>
      </div>
    </div>
  );
};

export default Footer;
