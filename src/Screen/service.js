import React, { Component } from "react";
import { getServices } from "../method/service";
import HomeCars from "../widget/home_cars";
// import HomeCars from "../widget/home_cars";
import HomeFooter from "../widget/home_footer";
import HomeMunsoon from "../widget/home_monsoon";
import HomeQuestions from "../widget/home_questions";
import { Header } from "../widget/home_top";
import { EnquiryPopup } from "../widget/popups";
import ServiceAll from "../widget/service_all";
import ServiceBodyHeader from "../widget/service_body_header";
import { ErrorPage, LoadingPage } from "../widget/warning_page";

export default class Service extends Component {
  constructor() {
    super();
    this.state = {
      services: [],
      service: null,
      loading: true,
      error: null,
      seasonCars: [],
      homeSearchs: [],
      locations_h: [],
      locations_b: [],
      location: {},
      faq: [],
      enquiryPopup: null,
    };
  }

  componentDidMount() {
    getServices(this);
  }

  render() {
    const { loading, error } = this.state;
    if (loading) return <LoadingPage />;
    if (error != null) return <ErrorPage />;
    return (
      <React.StrictMode>
        <Header props={this} />
        <ServiceBodyHeader props={this} />
        <ServiceAll props={this} />
        {/* <HomeSecurity /> */}
        <HomeQuestions props={this} />
        <HomeCars props={this} />
        {/* <HomeMunsoon /> */}
        <HomeFooter props={this} />
        <EnquiryPopup props={this} />
      </React.StrictMode>
    );
  }
}
