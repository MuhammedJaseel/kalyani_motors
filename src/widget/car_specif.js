import React from "react";

function CarSpecification({ props }) {
  const { car } = props.state;

  return (
    <React.StrictMode>
      <div id="cr_4" className="cr_1e">{car.varients[0].title} Key Specifications</div>
      <div className="cr_sp_b">
        {car.varients[0].specifications.map((i, k) => (
          <div className="cr_sp_c" key={k}>
            <div className="cr_sp_d">{i.specname}</div>
            <div className="cr_sp_e">{i.value}</div>
          </div>
        ))}
      </div>
    </React.StrictMode>
  );
}

export default CarSpecification;
