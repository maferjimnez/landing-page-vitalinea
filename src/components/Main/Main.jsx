import React from "react";
import Hero from "../Hero/Hero";
import NutritionalInfo from "../NutritionalInfo/NutritionalInfo";
import VitalineaFamily from "../VitalineaFamily/VitalineaFamily";

const Main = () => {
  return (
    <main className="Main__container">
      <Hero />
      <NutritionalInfo />
      <VitalineaFamily />
    </main>
  );
};

export default Main;
