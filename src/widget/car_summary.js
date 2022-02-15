import React from "react";
function CarSummary({ props }) {
  const { car } = props.state;

  return (
    <React.StrictMode>
      <div className="cr_1e">{car.varients[0].title} Key Specifications</div>
      <div className="cr_sm_b">
        <div className="cr_sm_d" id="cr_5">
          About
        </div>
        <div className="cr_sm_e">{car.description}</div>
        <div className="cr_sm_d" id="cr_6">
          Description
        </div>
        <div className="cr_sm_e">{car.varients[0].products[0].description}</div>
      </div>
    </React.StrictMode>
  );
}

export default CarSummary;
