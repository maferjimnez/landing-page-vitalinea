import React from "react";
import Strawberry from "../Strawberry/Strawberry";
import strawberry_1 from "../../../assets/images/strawberry_1.png";
import strawberry_2 from "../../../assets/images/strawberry_2.png";
import strawberry_3 from "../../../assets/images/strawberry_3.png";
import strawberry_4 from "../../../assets/images/strawberry_4.png";
import strawberry_5 from "../../../assets/images/strawberry_5.png";
import strawberry_6 from "../../../assets/images/strawberry_6.png";

const StrawberriesBackground = () => {
  return (
    <div className="StrawberriesBackground__container">
      {/* strawberries hero */}
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

      {/* strawberries nutritional info */}
      <Strawberry
        src={strawberry_2}
        starwberryClassName={"strawberry2__nutritionalInfo"}
      />
      <Strawberry
        src={strawberry_4}
        starwberryClassName={"strawberry4__nutritionalInfo"}
      />
      <Strawberry
        src={strawberry_5}
        starwberryClassName={"strawberry5__nutritionalInfo"}
      />
      <Strawberry
        src={strawberry_3}
        starwberryClassName={"strawberry3__nutritionalInfo"}
      />
    </div>
  );
};

export default StrawberriesBackground;
