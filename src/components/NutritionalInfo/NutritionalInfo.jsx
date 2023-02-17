import React from "react";
import NutritionalInfoTable from "./NutritionalInfoTable";
import Strawberry from "../commons/Strawberry/Strawberry";
import nutritionalInformation from "../../assets/data/nutritionalInformation/NutritionalInformationData.json";
import downArow from "../../assets/icons/down_arrow_icon.png";

const NutritionalInfo = () => {
  const nutritionalInformationData =
    nutritionalInformation.nutritionalInformation;

  return (
    <section className="NutritionalInfo__container">
      <div className="DownArrow__wrapper">
        <img src={downArow} alt="Arrow pointing down icon" />
      </div>
      <h2 className="NutritionalInfo-title">Información nutrimental</h2>
      <div className="NutritionalInfo__wrapper">
        <div className="NutritionalInfo-details__container">
          <div className="NutritionalInfo-ingredients__container">
            <span className="Ingredients-item">
              Vitalínea® Bebible Guayaba 217gr
            </span>
            <span className="Ingredients-item">
              Valor promedio por porción de 217gr
            </span>
            <span className="Ingredients-item">Porciones por envase: 1</span>
            <div className="Ingredients-description">
              <p className="Ingredients-description-title">Ingredientes:</p>
              <p className="Ingredients-description-text">
                Leche descremada pasteurizada y/o reconstituida pasteurizada de
                vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa
                (27.2mg/100g)), crema, almidón modificado, maltodextrina y
                cultivos lácticos.
              </p>
            </div>
          </div>
        </div>
        <NutritionalInfoTable data={nutritionalInformationData} />
      </div>
    </section>
  );
};

export default NutritionalInfo;
