import React from "react";
import VitalineaItem from "./VitalineaItem";
import vitalineaFamily from "../../assets/data/vitalineaFamily/VitalineaFamilyData.json";

const VitalineaFamily = () => {
  const vitalineaFamilyData = vitalineaFamily.vitalineaFamily;
  return (
    <section className="VitalineaFamily__container" id="VitalineaFamily">
      <h2 className="VitalineaFamily-title">La Familia Vitalínea</h2>
      <div className="VitaliaItems__container">
        {vitalineaFamilyData.map((item, index) => {
          return (
            <div
              className="VitalineaItem__wrapper"
              key={`vitalineaItem-${index}`}
            >
              <VitalineaItem
                src={item.yogurtImg}
                alt={item.yogurtName}
                name={item.yogurtName}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VitalineaFamily;
