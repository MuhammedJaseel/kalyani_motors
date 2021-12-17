///////////////////////////////////////////////////////////////////////
//  Go mechanic clone Design for kalyani moters
//  Design
//  SOURAV
//  30 aug 2021
///////////////////////////////////////////////////////////////////////

import React, { useRef } from "react";
import { kalyaniDark } from "../module/logo";

const data = [
  { title: "New Cars" },
  { title: "Car Services " },
  { title: "Car Insurence" },
  { title: "Special Services " },
  { title: "Find Your Car" },
  { title: "Kalyani Motors App" },
  { title: "Common FAQ" },
  { title: "Contact Us" },
];

function HomeBodyHeader() {
  const myRef = useRef(null);
  return (
    <div style={{ position: "sticky", top: 0 }}>
      <div className="home_body_header_container">
        <div className="home_body_header_logo_area">
          <div className="home_base_logo_area">
            <img
              loading="lazy"
              src={kalyaniDark}
              className="home_base_logo"
              alt="Kalyani"
            />
          </div>
        </div>
        <div className="home_body_header_navigator">
          <img
            src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/PcHomeForm/FF3733C0-2200-4562-A654-5C44240968CE.svg"
            className="home_body_header_leftarrow"
            alt="<"
          />
          <div ref={myRef} className="home_body_header_maincontent">
            {data.map((item, k) => (
              <div
                onClick={() => window.scrollTo(myRef)}
                // onClick={() => window.scroll(0, 600 + 600 * k)}
                className="home_body_header_content"
              >
                {item.title}
              </div>
            ))}
          </div>
          <img
            src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/PcHomeForm/FF3733C0-2200-4562-A654-5C44240968CE.svg"
            className="home_body_header_rightarrow"
            // onClick={() =>myRefcurrent.scrollIntoView(100, 0)}
            alt="Car"
          />
        </div>
        <div className="home_body_header_booking_area">
          <select className="car_setting_popup_type_input">
            <option value="new">New Car</option>
            <option value="service">Service</option>
          </select>
          <input
            className="car_setting_popup_car_input"
            placeholder="SELECT YOUR CAR"
            type="dropdown"
          />
          <div className="car_setting_popup_button">Check Now</div>
        </div>
      </div>
    </div>
  );
}

export default HomeBodyHeader;
