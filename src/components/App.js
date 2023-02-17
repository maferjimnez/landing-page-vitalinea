import React from "react";
import "../styles/styles.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import StrawberriesBackground from "./commons/StrawberriesBackground/StrawberriesBackground";

const App = () => {
  return (
    <div className="App">
      <StrawberriesBackground />
      <Header />
      <Main />
    </div>
  );
};

export default App;
