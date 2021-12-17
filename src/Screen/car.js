import React from "react";
import CarDetails from "../Compnent/car_details";
import CarHeader from "../Compnent/car_header";
import CarSpecification from "../Compnent/car_specif";
import CarSummary from "../Compnent/car_summary";
import HomeFooter from "../Compnent/home_footer";

function Car() {
  return (
    <React.StrictMode>
      <CarHeader />
      <div className="cr_1c">
        <div className="cr_1d">
          <CarDetails />
          <CarSpecification />
          <CarSummary />
        </div>
      </div>
      <HomeFooter />
    </React.StrictMode>
  );
}

export default Car;
