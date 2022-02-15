import React from "react";
import { kalyaniDark, kalyaniLight } from "../module/logo";
import arrow_down from "../asset/arrow_down.svg";
import close_1 from "../asset/close_1.svg";
import { getImage } from "../module/api_init";
import { makespaceline } from "../module/simple";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import phoneIcon from "../asset/phone_icon.png";
import maruthiLogo from "../asset/maruthiLogo.png";

export function HomeLocationPopup({ props }) {
  const { locations_h, locations_b, locationPopup } = props.state;
  return (
    <div
      style={locationPopup ? { visibility: "visible" } : {}}
      className="mylocation_popup_screen"
    >
      <div className="mylocation_popup">
        <div className="row">
          <div style={{ width: "100%" }}>
            <div className="mylocation_popup_title">Choose Your City</div>
            <div className="mylocation_popup_subtitle">
              This would help us in providing you quick service.
            </div>
          </div>
          <img
            width="20"
            alt="img"
            style={{ cursor: "pointer" }}
            onClick={() => props.setState({ locationPopup: false })}
            src={close_1}
          />
        </div>
        <div className="mylocation_popup_subtitle2">Bangalore</div>
        <div className="mylocation_popup_body">
          {locations_b.map((item) => (
            <div
              className="mylocation_each"
              onClick={() =>
                props.setState({ location: item, locationPopup: false })
              }
            >
              <img width="50" src={getImage(item.loc_image)} alt="img" />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
        <div className="mylocation_popup_subtitle2">Hydrabad</div>
        <div className="mylocation_popup_body">
          {locations_h.map((item) => (
            <div
              className="mylocation_each"
              onClick={() =>
                props.setState({ location: item, locationPopup: false })
              }
            >
              <img width="50" src={getImage(item.loc_image)} alt="img" />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header({ props }) {
  const { location } = props.state;

  return (
    <div className="header_container">
      <div className="home_base_logo_area">
        <img
          loading="lazy"
          src={kalyaniDark}
          className="home_base_logo"
          onClick={() => (window.location = "/")}
          alt="KAlyani"
        />
        <div
          onClick={() => props.setState({ locationPopup: true })}
          className="location_text"
        >
          {location.city != null
            ? location.city === 1
              ? "Bengaluru"
              : "Hydrabad"
            : ""}
          {" - "}
          {location.title ?? ""}&nbsp;
          <img alt="img" loading="lazy" src={arrow_down} />
        </div>
      </div>
      <div className="header_container_menu">
        <div className="header_text">
          <img alt="Img" src={phoneIcon} width="15" /> &nbsp;&nbsp;
          {location.phone_number ?? ""}
        </div>
        <img src={maruthiLogo} />
      </div>
    </div>
  );
}

export function HomeTop({ props }) {
  const { banners, homeSearchs } = props.state;
  return (
    <div className="hm1_a">
      <div className="hm1_b">
        <Carousel autoPlay showThumbs={false}>
          {banners.map((b) => (
            <img className="hm1_d" src={getImage(b.banner_img)} />
          ))}
        </Carousel>
      </div>

      <div className="car_setting_popup">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="car_setting_popup_title">
            Find Your Car or Car Service
          </div>
        </div>
        <form
          onChange={props.carAndServiceSearch}
          onSubmit={props.carAndServiceSearch}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="car_setting_popup_body">
              <select id="type" className="car_setting_popup_type_input">
                <option value="c">New Car</option>
                <option value="s">Service</option>
              </select>
              <div className="hm1_e">
                <input
                  id="value"
                  className="car_setting_popup_car_input"
                  placeholder="SELECT YOUR CAR"
                  autocomplete="off"
                />
                {homeSearchs.length !== 0 ? (
                  <div className="hm1_c">
                    {homeSearchs.map((hs) => (
                      <div
                        className="hm1_f"
                        onClick={() => {
                          if (hs.title === null)
                            window.location =
                              "/car/" + makespaceline(hs.route ?? "");
                          else
                            window.location =
                              "/service/" + makespaceline(hs.title ?? "");
                        }}
                      >
                        {hs.name ?? hs.title}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              <button type="submit" className="car_setting_popup_button">
                Check Now
              </button>
            </div>
          </div>
        </form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="car_setting_popup_subtitle">
            <div className="row">Get instant quotes for your car service</div>
            <div style={{ cursor: "pointer" }} className="row">
              <div onClick={() => props.executeScroll("hm_c")}>
                Our Services
              </div>
              &nbsp;|&nbsp;
              <div onClick={() => props.executeScroll("hm_g")}>About Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
