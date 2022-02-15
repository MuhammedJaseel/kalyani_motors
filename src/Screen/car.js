import CarDetails from "../widget/car_details";
import CarSpecification from "../widget/car_specif";
import CarSummary from "../widget/car_summary";
import HomeFooter from "../widget/home_footer";

import React, { Component } from "react";
import { getCar } from "../method/car";
import { ErrorPage, LoadingPage } from "../widget/warning_page";
import { EnquiryPopup } from "../widget/popups";
import { Header } from "../widget/home_top";

export default class Car extends Component {
  constructor() {
    super();
    this.state = {
      car: {},
      loading: true,
      error: null,
      imgCount: 0,
      colorCount: 0,
      versionCount: 0,
      homeSearchs: [],
      locations_h: [],
      locations_b: [],
      location: {},
      enquiryPopup: null,
    };
  }

  componentDidMount() {
    getCar(this);
  }

  render() {
    const { loading, error } = this.state;
    if (loading) return <LoadingPage />;
    if (error !== null) return <ErrorPage />;
    return (
      <React.StrictMode>
        <Header props={this} />
        <div className="cr_1c">
          <div className="cr_1d">
            <CarDetails props={this} />
            <CarSpecification props={this} />
            <CarSummary props={this} />
          </div>
        </div>
        <HomeFooter props={this} />
        <EnquiryPopup props={this} />
      </React.StrictMode>
    );
  }
}
