///////////////////////////////////////////////////////////////////////
//  Go mechanic clone Design for kalyani moters
//  Design
//  SOURAV
//  30 aug 2021
///////////////////////////////////////////////////////////////////////

import { getImage } from "../module/api_init";

function HomeSecurity({ props }) {
  const { bannar_p } = props.state;
  return (
    <div className="hb_1a" id="hm_d">
      <div className="hb_1d" />
      {/* <div className="bottomTextBox">
        <div className="iconimg" />
        <div>
          <div className="bottomBoxHeading">
            Kalyani Motors Assurance Program
          </div>
          <div className="bottomBoxSubText">
            • Upto Rs.25,000 insurence protection with every service request
          </div>
          <div className="bottomBoxSubText">
            • Program protects users against damage caused during free pickup
            and delivery of cars
          </div>
          <div style={{ fontWeight: "600", fontSize: 14, marginBottom: 15 }}>
            KNOW MORE
          </div>
        </div>
      </div> */}
      <img width="100%" src={getImage(bannar_p)} />
    </div>
  );
}

export default HomeSecurity;
