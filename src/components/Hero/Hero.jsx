import React from "react";
import Strawberry from "../commons/Strawberry/Strawberry";
import HeroFlavorInfo from "./HeroFlavorInfo/HeroFlavorInfo";
import strawberry_drinkable_bottle from "../../assets/images/strawberry_drinkable_bottle@1.png";
import no_sugar_ribbon from "../../assets/images/fmd_interior.png";
import calories from "../../assets/images/no_sugar_ribbon.png";

const Hero = () => {
  return (
    <section className="Hero__wrapper">
      <div className="Hero__container">
        <div className="HeroInfoContent__wrapper">
          <div className="HeroInfoContent-img__wrapper">
            <img
              src={strawberry_drinkable_bottle}
              alt="Strawberry dinkable yogurt bottle"
            />
          </div>
          <div className="HeroInfoContent__container">
            <HeroFlavorInfo />
            <div className="HeroBuyButton__wrapper">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.walmart.com.mx/inicio";
                }}
              >
                Comprar en Walmart
              </button>
            </div>
            <div className="HeroCertificationIcons__container">
              <img src={no_sugar_ribbon} alt="FMD certificate" />
              <img src={calories} alt="Calories" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
