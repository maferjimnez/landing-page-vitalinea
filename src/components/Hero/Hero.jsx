import React from "react";
import Strawberry from "../commons/Strawberry/Strawberry";
import HeroFlavorInfo from "./HeroFlavorInfo/HeroFlavorInfo";
import strawberry_1 from "../../assets/images/strawberry_1.png";
import strawberry_6 from "../../assets/images/strawberry_6.png";
import strawberry_2 from "../../assets/images/strawberry_2.png";
import strawberry_drinkable_bottle from "../../assets/images/strawberry_drinkable_bottle@1.png";
import no_sugar_ribbon from "../../assets/images/fmd_interior.png";
import calories from "../../assets/images/no_sugar_ribbon.png";

const Hero = () => {
  return (
    <section className="Hero__container">
      <Strawberry
        starwberryClassName={"strawberry1__hero"}
        src={strawberry_1}
      />
      <Strawberry
        starwberryClassName={"strawberry6__hero"}
        src={strawberry_6}
      />
      <Strawberry
        starwberryClassName={"strawberry2__hero"}
        src={strawberry_2}
      />
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
            <button>Comprar en Walmart</button>
          </div>
          <div className="HeroCertificationIcons__container">
            <img src={no_sugar_ribbon} alt="FMD certificate" />
            <img src={calories} alt="Calories" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
