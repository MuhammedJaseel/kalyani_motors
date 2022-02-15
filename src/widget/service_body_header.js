///////////////////////////////////////////////////////////////////////
//  Go mechanic clone Design for kalyani moters
//  Design
//  SOURAV
//  30 aug 2021
///////////////////////////////////////////////////////////////////////

import { getServiceImage } from "../module/api_init";
import { makespaceline } from "../module/simple";

function ServiceBodyHeader({ props }) {
  const { services } = props.state;
  return (
    <div style={{ position: "sticky", top: 65 }}>
      <div className="service_body_header_container">
        <div className="home_body_header_maincontent">
          {services.map((item) => (
            <div
              style={{ minWidth: 150 }}
              onClick={() =>
                (window.location = "/service/" + makespaceline(item.title))
              }
            >
              <center>
                <img height="40" src={getServiceImage(item.image)} alt="img" />
                <div style={{ fontSize: 12, color: "#4a4a4a" }}>
                  {item.title}
                </div>
              </center>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceBodyHeader;
