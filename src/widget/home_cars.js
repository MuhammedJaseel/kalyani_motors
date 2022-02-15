import React, { useState } from "react";
import { getCarImage } from "../module/api_init";
import { getComaPrice, makespaceline } from "../module/simple";

function HomeCars({ props }) {
  const items = props.state.seasonCars;
  const [page, setpage] = useState(0);
  const selctedTypeStyle = { color: "#00afa0", fontWeight: "bold" };

  return (
    <div className="hb_1a" id="hm_a">
      <div className="hb_1d" />
      <div className="hb_1b">
        <div className="hb_1b_a"> Maruti Suzuki - New Cars </div>
        <div className="hb_1b_b" onClick={() => (window.location = "/allcars")}>
          View All Cars
        </div>
      </div>
      <div className="hb_1b1">
        <div className="hb_1b2">
          {items.map((tab, k) => (
            <div className="hb_1b2a" onClick={() => setpage(k)}>
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
          {items[page]?.bikes?.map((item) => (
            <div className="hb_8c">
              <div
                className="hb_8d"
                onClick={() =>
                  (window.location = "/car/" + makespaceline(item.route))
                }
              >
                <img
                  className="hb_8e"
                  src={getCarImage(item.images?.[0]?.images)}
                  alt="img"
                />
              </div>
              <div className="hb_8f">
                <div
                  className="hb_8j"
                  style={{ height: 20, overflow: "hidden" }}
                >
                  {item.name}
                </div>
                <div className="hb_8g">
                  ₹ {getComaPrice(item.price ?? "0")} Rs
                </div>
                <div
                  className="hb_8h"
                  onClick={() =>
                    props.setState({
                      enquiryPopup: { car: item.name, type: 5 },
                    })
                  }
                >
                  Avg Ex-showroom price
                </div>
                <div
                  className="hb_8i"
                  onClick={() =>
                    props.setState({
                      enquiryPopup: { car: item.name, type: 0 },
                    })
                  }
                >
                  Show On-Road Price
                </div>
                <div
                  className="hb_8i"
                  onClick={() =>
                    props.setState({
                      enquiryPopup: { car: item.name, type: 6 },
                    })
                  }
                >
                  Show price in my city
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeCars;
