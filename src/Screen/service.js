import React from "react";
import HomeCars from "../Compnent/home_cars";
import HomeFooter from "../Compnent/home_footer";
import HomeMunsoon from "../Compnent/home_monsoon";
import HomeQuestions from "../Compnent/home_questions";
import HomeSecurity from "../Compnent/home_security";
import ServiceAll from "../Compnent/service_all";
import ServiceBodyHeader from "../Compnent/service_body_header";
import ServiceHeader from "../Compnent/service_header";

function Service({ location }) {
  return (
    <React.StrictMode>
      <ServiceHeader />
      <ServiceBodyHeader />
      <ServiceAll location={location} />
      <HomeSecurity />
      <HomeQuestions />
      <HomeCars />
      <HomeMunsoon />
      <HomeFooter />
    </React.StrictMode>
  );
}

export default Service;
