import React from "react";
import Strawberry from "../Strawberry/Strawberry";
import AnimatedItem from "../AnimatedItem/AnimatedItem";
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
      <AnimatedItem
        from={{ opacity: 0, translate: "2rem 0" }}
        to={{ opacity: 1, translate: "none" }}
        transition={{ transition: "1s ease-in" }}
      >
        <Strawberry
          src={strawberry_5}
          starwberryClassName={"strawberry5__nutritionalInfo"}
        />
      </AnimatedItem>
      <AnimatedItem
        from={{ opacity: 0, translate: "0 2rem" }}
        to={{ opacity: 1, translate: "none" }}
        transition={{ transition: "2s ease-in" }}
      >
        <Strawberry
          src={strawberry_3}
          starwberryClassName={"strawberry3__nutritionalInfo"}
        />
      </AnimatedItem>
      {/* strawberries vitalinea family  */}
      <AnimatedItem
        from={{ opacity: 0, translate: "0 4rem" }}
        to={{ opacity: 1, translate: "none" }}
        transition={{ transition: "2s ease-in" }}
      >
        <Strawberry
          src={strawberry_2}
          starwberryClassName={"strawberry2__vitalineaFamily"}
        />
      </AnimatedItem>
      <Strawberry
        src={strawberry_2}
        starwberryClassName={"strawberry2-bluried__vitalineaFamily"}
      />
    </div>
  );
};

export default StrawberriesBackground;
