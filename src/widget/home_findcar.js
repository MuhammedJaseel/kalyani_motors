import React, { useState } from "react";
import { getCarImage } from "../module/api_init";
import { getComaPrice, makespaceline } from "../module/simple";

function HomeFindCar({ props }) {
  const [pageM, setpageM] = useState(0);
  const [page, setpage] = useState(0);

  const { findCars } = props.state;
  const selctedTypeStyle = {
    color: "#00afa0",
    fontWeight: "bold",
  };

  return (
    <div className="hb_1a" id="hm_b">
      <div className="hb_1d" />
      <div className="hb_1b">
        <div className="hb_1b_a"> Choose Your Car </div>
        <div className="hb_1b_b" onClick={() => (window.location = "/allcars")}>
          View All Cars
        </div>
      </div>
      <div className="hb_1b"></div>
      <div className="hb_1b1">
        <div className="hb_1b2">
          {findCars.map((tab, k) => (
            <div
              className="hb_1b2a"
              onClick={() => {
                setpageM(k);
                setpage(0);
              }}
            >
              <div
                className="hb_1b3"
                style={pageM === k ? selctedTypeStyle : {}}
              >
                {tab.title}
              </div>
              <div
                className="hb_1b3a"
                style={{ visibility: pageM === k ? null : "hidden" }}
              />
            </div>
          ))}
        </div>
        <div className="hb_1b2b" />
        <div className="hb_1b2">
          {findCars[pageM].cat.map((tab, k) => (
            <div className="hb_1b2a" onClick={() => setpage(k)}>
              <div
                className="hb_1b3a"
                style={{ visibility: page === k ? null : "hidden" }}
              />
              <div
                className="hb_1b3"
                style={page === k ? selctedTypeStyle : {}}
              >
                {tab.title}
              </div>
            </div>
          ))}
        </div>
        {console.log(findCars[pageM].cat[page].cars)}
        <div className="hb_8a">
          {findCars[pageM].cat[page].cars.map((item) => (
            <div className="hb_8c">
              <div
                className="hb_8d"
                onClick={() =>
                  (window.location = "/car/" + makespaceline(item.route))
                }
              >
                <img
                  className="hb_8e"
                  src={getCarImage(item.images[0].images)}
                  alt="img"
                />
              </div>
              <div className="hb_8f">
                <div className="hb_8j">{item.name}</div>
                <div className="hb_8g">₹ {getComaPrice(item.price)} Rs</div>
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

export default HomeFindCar;
