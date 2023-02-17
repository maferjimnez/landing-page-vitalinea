import React from "react";

const NutritionalInfoTable = (props) => {
  const { data } = props;

  return (
    <div className="NutritionalInfoTable__container">
      <table className="NutritionalInfoTable">
        {data.map((item) => {
          return (
            <tr>
              <td>{item.dataType}</td>
              <td>{item.value}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default NutritionalInfoTable;
