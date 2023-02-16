import React, { useState } from "react";
import vitaliaFlavors from "../../../assets/data/vitaliaFlavor/VitaliaFavorsData.json";

const HeroFlavorInfo = () => {
  const flavors = vitaliaFlavors.vitaliaFlavors;
  const [currentFlavor, setCurrentFlavor] = useState(flavors[0]);
  const [selectedButton, setSelectedButton] = useState(0);

  const handleChangeFlavor = (flavor, e) => {
    const index = +e.target.value;
    setSelectedButton(index);
    setCurrentFlavor(flavors[index]);
  };

  return (
    <div className="HeroFlavorInfo__container">
      <div className="HeroFlavorInfoButtons__container">
        <p>Sabor:</p>
        <div className="FlavorButtons__container">
          {flavors.map((flavor, index) => {
            return (
              <button
                key={`flavor-${index}`}
                index={index}
                value={index}
                className={index === selectedButton && "selectecButton"}
                onClick={(e) => {
                  handleChangeFlavor(flavor, e);
                }}
              >
                {flavor.flavorName}
              </button>
            );
          })}
        </div>
      </div>

      <div className="HeroFlavorInfoText__container">
        <h1 className="FlavorInfoText--title">{currentFlavor.flavorTitle}</h1>
        <p className="FlavorInfoText--description">
          {currentFlavor.flavorDescription}
        </p>
      </div>
    </div>
  );
};

export default HeroFlavorInfo;
