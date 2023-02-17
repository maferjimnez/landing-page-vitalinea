import React from "react";

const VitalineaItem = (props) => {
  const { src, alt, name } = props;

  return (
    <div className="VitalineaItem__container">
      <div className="VitalineaItem--img__wrapper">
        <img src={src} alt={alt} />
      </div>
      <div className="VitalineaItem--name">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default VitalineaItem;
