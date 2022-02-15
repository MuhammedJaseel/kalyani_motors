import React, { Component } from "react";
import "../style/cu1.css";
import directIcon from "../asset/direct_icon.png";
import phoneIconB from "../asset/phone_icon_b.png";
import globeIcon from "../asset/globe_icon.png";
import { EnquiryPopup } from "../widget/popups";
import { getdataforContact } from "../method/contact";
import { ErrorPage, LoadingPage } from "../widget/warning_page";
import { Header } from "../widget/home_top";
import HomeFooter from "../widget/home_footer";
import HomeQuestions from "../widget/home_questions";

export default class ContactPage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: null,
      enquiryPopup: null,
      locations_h: [],
      locations_b: [],
      location: {},
      faq: [],
      area: 0,
      place: 0,
      shops_b: [],
      shops_h: [],
    };
  }

  componentDidMount() {
    getdataforContact(this);
  }

  render() {
    const { loading, error, area, place, shops_b, shops_h } = this.state;
    if (loading) return <LoadingPage />;
    if (error != null) return <ErrorPage />;
    return (
      <React.StrictMode>
        <Header props={this} />

        <div className="cu1_a_a">
          <div className="cu1_a_b">
            <div className="cu1_a_c">
              <div
                className="cu1_a_d"
                onClick={() => this.setState({ area: 0 })}
              >
                <div className="cu1_a_e">Bangalore</div>
                {area === 0 ? <div className="cu1_a_f" /> : null}
              </div>
              <div
                className="cu1_a_d"
                onClick={() => this.setState({ area: 1 })}
              >
                <div className="cu1_a_e">Hyderabad</div>
                {area === 1 ? <div className="cu1_a_f" /> : null}
              </div>
            </div>
            <div className="cu1_a_g" />
            <div className="cu1_a_c">
              <div
                className="cu1_a_d"
                onClick={() => this.setState({ place: 0 })}
              >
                {place === 0 ? <div className="cu1_a_f" /> : null}
                <div className="cu1_a_e">Nexa</div>
              </div>
              <div
                className="cu1_a_d"
                onClick={() => this.setState({ place: 1 })}
              >
                {place === 1 ? <div className="cu1_a_f" /> : null}
                <div className="cu1_a_e">Arena</div>
              </div>
              <div
                className="cu1_a_d"
                onClick={() => this.setState({ place: 2 })}
              >
                {place === 2 ? <div className="cu1_a_f" /> : null}
                <div className="cu1_a_e">Commercial</div>
              </div>
            </div>
          </div>
        </div>

        {(area == 0 ? shops_b : shops_h)[place]?.data.map((loc) => (
          <div className="cu1_b_a">
            <div className="cu1_b_lc1_a">
              <div className="cu1_b_lc1_ab">
                <img
                  alt="Loacation"
                  className="cu1_b_lc1_ab"
                  src="https://ktmapi.kalyaniktm.com/storage/YWkti9HRVzVikIco6AJ0rongP5mGufCGUVSZrRaN.jpg"
                  //   src={setUrlimgLoc(loc.images[0].file)}
                />
              </div>
              <div className="cu1_b_lc1_ac">
                <div className="cu1_b_lc1_acba">{loc.location_name}</div>
                <div className="cu1_b_lc1_acbb">{loc.address}</div>
                <div className="cu1_b_lc1_acbba">
                  {loc.phone}/{loc.alternate_phone}
                </div>
                <div className="cu1_b_lc1_acbba">
                  customersupport@kalyanimotors.com
                </div>
                <div className="cu1_b_lc1_acbba">
                  Opening Time {loc.open_time}&nbsp;&nbsp;&nbsp;&nbsp;Closing
                  Time {loc.close_time}
                </div>

                <div className="cu1_b_lc1_aca">
                  <div
                    className="cu1_b_lc1_acaa"
                    onClick={() =>
                      window.location.assign(
                        `https://maps.google.com/?q=${loc.latitude},${loc.longtitude}`
                      )
                    }
                  >
                    <img
                      alt="icon"
                      className="cu1_b_lc1_acab"
                      src={directIcon}
                    />
                    Directions
                  </div>
                  <div
                    className="cu1_b_lc1_acaa"
                    onClick={() => window.location.assign(`tel:${loc.phone}`)}
                  >
                    <img
                      alt="icon"
                      className="cu1_b_lc1_acab"
                      src={phoneIconB}
                    />
                    Call
                  </div>
                  <div
                    className="cu1_b_lc1_acaa"
                    onClick={() => window.location.assign(loc.website)}
                  >
                    <img className="cu1_b_lc1_acab" src={globeIcon} />
                    Web Site
                  </div>
                  <div className="cu1_b_lc1_acac">
                    <div
                      className="cu1_b_lc1_acaca"
                      onClick={() =>
                        this.setState({
                          enquiryPopup: {
                            location: loc.location_name,
                            type: 3,
                          },
                        })
                      }
                    >
                      Book a Test Drive
                    </div>
                    <div
                      className="cu1_b_lc1_acaca"
                      onClick={() =>
                        this.setState({
                          enquiryPopup: {
                            location: loc.location_name,
                            type: 8,
                          },
                        })
                      }
                    >
                      Book a Service
                    </div>
                    <div
                      className="cu1_b_lc1_acaca"
                      onClick={() =>
                        this.setState({
                          enquiryPopup: {
                            location: loc.location_name,
                            type: 5,
                          },
                        })
                      }
                    >
                      Enquire Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <HomeQuestions props={this} />
        <HomeFooter props={this} />
        <EnquiryPopup props={this} />
      </React.StrictMode>
    );
  }
}
