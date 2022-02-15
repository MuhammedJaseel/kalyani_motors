import { kalyaniDark } from "../module/logo";

import React, { Component } from "react";
import getAllcars from "../method/all_car";
import { ErrorPage, LoadingPage } from "../widget/warning_page";
import { getCarImage } from "../module/api_init";
import { makespaceline } from "../module/simple";
import { EnquiryPopup } from "../widget/popups";
import HomeFooter from "../widget/home_footer";
import { Header } from "../widget/home_top";

export default class AllCars extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      loading: true,
      error: null,
      items: [],
      locations_h: [],
      locations_b: [],
      location: {},
      enquiryPopup: null,
    };
  }

  componentDidMount() {
    getAllcars(this);
  }

  render() {
    const selctedTypeStyle = { color: "#00afa0", fontWeight: "bold" };
    const { page, loading, error, items } = this.state;

    if (loading) return <LoadingPage />;
    if (error) return <ErrorPage />;
    return (
      <React.StrictMode>
        <Header props={this} />
        <div className="hb_1a">
          <div className="hb_1d" />
          <div className="hb_1b_a">Maruti Suzuki - All cars</div>
          <div className="hb_1b1">
            <div className="hb_1b2">
              {items.map((tab, k) => (
                <div
                  className="hb_1b2a"
                  onClick={() => this.setState({ page: k })}
                >
                  <div
                    className="hb_1b3"
                    style={page === k ? selctedTypeStyle : {}}
                  >
                    {tab.season_name}
                  </div>
                  <div
                    className="hb_1b3a"
                    style={{ visibility: page === k ? null : "hidden" }}
                  />
                </div>
              ))}
            </div>
            <div className="hb_1b2b" />

            <div className="hb_8a">
              {items[page].bikes.map((item) => (
                <div
                  className="hb_8c"
                  onClick={() =>
                    (window.location = "/car/" + makespaceline(item.route))
                  }
                >
                  <div className="hb_8d">
                    <img
                      className="hb_8e"
                      src={getCarImage(item.images?.[0]?.images)}
                      alt="img"
                    />
                  </div>
                  <div className="hb_8f">
                    <div className="hb_8j">{item.name}</div>
                    <div className="hb_8g">₹ {item.price} Lakh</div>
                    <div className="hb_8h">Avg Ex-showroom price </div>
                    <div className="hb_8i">Show price in my city</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <HomeFooter props={this} />
        <EnquiryPopup props={this} />
      </React.StrictMode>
    );
  }
}
