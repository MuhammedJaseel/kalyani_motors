import React from "react";
import { getServiceImage } from "../module/api_init";
import { makespaceline } from "../module/simple";

export default function HomeService({ props }) {
  const { services, location } = props.state;
  return (
    <div className="hb_1a" id="hm_c">
      <div className="hb_1d" />
      <div className="hb_1b">
        <div className="hb_1b_a"> Car Services Available In Bangalore </div>
      </div>
      <div className="hb_1b"></div>
      <div className="hb_1c">
        Get discounted professional periodic car service and repair, wheel care,
        cashless insurance claim and much more in the Silicon Valley of India;
        Bangalore.
      </div>
      <div style={{ flexWrap: "wrap", display: "flex", overflow: "auto" }}>
        {services.map((d) => (
          <div
            className="home_services_each"
            onClick={() =>
              (window.location =
                "/service/" + makespaceline(d.title) + "/" + location.id)
            }
          >
            <div className="home_services_img_area">
              <img
                className="home_services_each_img"
                src={getServiceImage(d.image)}
                alt="img"
              />
            </div>
            <div className="home_services_each_title">{d.title}</div>
            <div className="home_services_each_subtitle">{d.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
