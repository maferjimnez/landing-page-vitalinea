import React from "react";

const NutritionalInfoTable = (props) => {
  const { data } = props;

  return (
    <div className="NutritionalInfoTable__container">
      <table className="NutritionalInfoTable">
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={`nutritionalInfoItem-${index}`}>
                <td>{item.dataType}</td>
                <td>{item.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NutritionalInfoTable;
