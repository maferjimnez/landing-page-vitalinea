import React from "react";

const Strawberry = (props) => {
  const { starwberryClassName, src } = props;
  return (
    <div
      className={starwberryClassName + " Strawberry__container"}
      style={{ backgroundImage: `url(${src})` }}
    ></div>
  );
};

export default Strawberry;
