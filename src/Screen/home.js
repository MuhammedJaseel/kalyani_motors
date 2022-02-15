import React, { Component } from "react";
import HomeAppsAds from "../widget/home_apps_ads";
import HomeBodyHeader from "../widget/home_body_header";
import HomeBrands from "../widget/home_brands";
import HomeCars from "../widget/home_cars";
import HomeFindCar from "../widget/home_findcar";
import HomeFooter from "../widget/home_footer";
import HomeMunsoon from "../widget/home_monsoon";
import HomeQuestions from "../widget/home_questions";
import HomeSecurity from "../widget/home_security";
import HomeService from "../widget/home_service";
import { HomeTop, HomeLocationPopup, Header } from "../widget/home_top";
import HomeOnroudPrice from "../widget/home_onroadprice";
import { getAllData, homeCarAndServiceSearch } from "../method/home";
import { ErrorPage, LoadingPage } from "../widget/warning_page";
import { EnquiryPopup } from "../widget/popups";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      locationPopup: false,
      loading: true,
      error: null,
      allCars: [],
      seasonCars: [],
      findCars: [],
      services: [],
      banners: [],
      homeSearchs: [],
      locations_h: [],
      locations_b: [],
      location: {},
      faq: [],
      enquiryPopup: null,
      bannar_p: null,
      bannar_e: null,
      sesonService: { services: [] },
    };
  }

  componentDidMount() {
    getAllData(this);
  }

  executeScroll = (id) => {
    var element = document.getElementById(id);
    if (element === null) return;
    var elementPosition = element.getBoundingClientRect().top;
    window.scrollTo({
      top: window.scrollY + elementPosition - 70,
      behavior: "smooth",
    });
  };

  carAndServiceSearch = (e) => homeCarAndServiceSearch(e, this);

  render() {
    const { loading, error } = this.state;
    if (loading) return <LoadingPage />;
    if (error != null) return <ErrorPage />;
    return (
      <React.StrictMode>
        <Header props={this} />
        <HomeTop props={this} />
        <HomeBrands />
        <HomeBodyHeader props={this} />
        <HomeLocationPopup props={this} />
        <HomeCars props={this} />
        <HomeOnroudPrice props={this} />
        <HomeFindCar props={this} />
        <HomeService props={this} />
        <HomeSecurity props={this} />
        <HomeMunsoon props={this} />
        {/* <HomeAppsAds /> */}
        <HomeQuestions props={this} />
        <HomeFooter props={this} />
        <EnquiryPopup props={this} />
      </React.StrictMode>
    );
  }
}
