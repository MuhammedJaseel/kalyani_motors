///////////////////////////////////////////////////////////////////////
//  Go mechanic clone Design for kalyani moters
//  Design
//  SOURAV
//  30 aug 2021
///////////////////////////////////////////////////////////////////////

import React from "react";
import { kalyaniDark } from "../module/logo";

const data = [
  { id: "hm_a", title: "Cars" },
  { id: "hm_b", title: "Find Your Car" },
  { id: "hm_c", title: "Car Services " },
  { id: "hm_d", title: "Car Insurance" },
  // { id: "hm_e", title: "Kalyani Motors App" },
  { id: "hm_f", title: "Common FAQ" },
  { id: "hm_g", title: "Contact Us" },
];

function HomeBodyHeader({ props }) {
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
          <div id="kjkj" className="home_body_header_maincontent">
            {data.map((item, k) => (
              <div
                onClick={() => props.executeScroll(item.id)}
                className="home_body_header_content"
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBodyHeader;
