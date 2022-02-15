import React from "react";
import { getImage } from "../module/api_init";
import { getComaPrice } from "../module/simple";

function CarDetails({ props }) {
  const { car, versionCount, colorCount, imgCount } = props.state;

  const executeScroll = (id) => {
    var element = document.getElementById(id);
    if (element === null) return;
    var elementPosition = element.getBoundingClientRect().top;
    window.scrollTo({
      top: window.scrollY + elementPosition - 70,
      behavior: "smooth",
    });
  };

  const star = (
    <svg
      className="cr_1f_a"
      fill="currentcolor"
      role="img"
      aria-label="rating icon"
      viewBox="0 0 11.62 11.06"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M11.55 4.44l-2.7 2.63.64 3.72a.26.26 0 0 1-.1.23.21.21 0 0 1-.24 0L5.81 9.28 2.47 11a.22.22 0 0 1-.24 0 .24.24 0 0 1-.1-.23l.64-3.72-2.7-2.61A.23.23 0 0 1 0 4.2.26.26 0 0 1 .2 4l3.73-.5L5.6.12a.24.24 0 0 1 .4 0L7.69 3.5l3.73.5a.26.26 0 0 1 .19.16.26.26 0 0 1-.06.28z"
      ></path>
    </svg>
  );

  return (
    <React.StrictMode>
      <div className="cr_1e" id="cr_1">
        {car.title}
      </div>
      <div className="cr_1f">
        {star}
        {star}
        {star}
        {star}
        {star}
      </div>
      <div className="cr_1g">
        <div className="cr_1g_a" onClick={() => executeScroll("cr_1")}>
          OVERVIEW
        </div>
        <div className="cr_1g_a" onClick={() => executeScroll("cr_2")}>
          IMAGES
        </div>
        <div className="cr_1g_a" onClick={() => executeScroll("cr_3")}>
          COLORS
        </div>
        <div className="cr_1g_a" onClick={() => executeScroll("cr_4")}>
          SPECIFICATIONS
        </div>
        <div className="cr_1g_a" onClick={() => executeScroll("cr_5")}>
          ABOUT
        </div>
        <div className="cr_1g_a" onClick={() => executeScroll("cr_6")}>
          DISCRIPTION
        </div>
      </div>
      {/* ////////////car//////////// */}
      <div className="cr_1h">
        <div className="cr_1i" id="cr_2">
          <img
            className="cr_1j"
            src={getImage(
              car.varients[versionCount].products[colorCount].images[imgCount][
                "images"
              ]
            )}
            alt="Car"
          />
          <div className="row">
            {car.varients[versionCount].products[colorCount].images
              .slice(0, 7)
              .map((i, k) => (
                <img
                  key={k}
                  alt="img"
                  onClick={() => props.setState({ imgCount: k })}
                  style={
                    imgCount === k
                      ? { border: "2px solid gray", height: 31 }
                      : {}
                  }
                  src={getImage(i["images"])}
                  className="cr_1k"
                />
              ))}
          </div>
        </div>
        <div className="cr_1m">
          <div className="row">
            <div className="cr_1n">
              <div className="cr_1s">
                <div className="cr_1o">
                  <div className="cr_1p">Version</div>
                  <div className="cr_1q">
                    {/* {car.varients[versionCount].title} */}
                    <select
                      className="bk1_dt1_cbbab"
                      onChange={(e) =>
                        props.setState({ versionCount: e.target.value })
                      }
                    >
                      {car.varients.map((v, k) => (
                        <option key={k} value={k}>
                          {v.var_title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* <div className="cr_1r">arrow</div> */}
              </div>
            </div>
            <div className="cr_1n">
              <div className="cr_1s">
                <div className="cr_1t">
                  <div className="cr_1p">City</div>
                  <div className="cr_1q">Show Price In My city</div>
                </div>
                {/* <div className="cr_1w">arrow</div> */}
              </div>
            </div>
          </div>
          {/* <div className="cr_1x">$ 11.99 Lack</div> */}
          <div className="cr_1x">
            ₹
            {getComaPrice(
              car.varients[versionCount].products[colorCount].price
            )}
            /-
          </div>
          <div className="cr_1y">Avarage Ex-showroom Price</div>
          <div className="cr_1z">
            <div className="cr_1u">
              <div>
                <div className="cr_1aa">Calculate Your EMI</div>
                <div
                  className="cr_1ab"
                  onClick={() =>
                    props.setState({
                      enquiryPopup: {
                        car: car.varients[versionCount].products[colorCount]
                          .name,
                        type: 2,
                      },
                    })
                  }
                >
                  EMI Calculater
                </div>
              </div>
              <div
                className="cr_1ac"
                onClick={() =>
                  props.setState({
                    enquiryPopup: {
                      car: car.varients[versionCount].products[colorCount].name,
                      type: 2,
                    },
                  })
                }
              >
                Get Emi Offer
              </div>
            </div>
          </div>
          <div
            className="cr_1ad"
            onClick={() =>
              props.setState({
                enquiryPopup: {
                  car: car.varients[versionCount].products[colorCount].name,
                  type: 0,
                },
              })
            }
          >
            Get on-road Price
          </div>
          <div
            className="cr_1ae"
            onClick={() =>
              props.setState({
                enquiryPopup: {
                  car: car.varients[versionCount].products[colorCount].name,
                  type: 3,
                },
              })
            }
          >
            Book Test Drive
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////// */}
      <div className="cr_1af" id="cr_3">
        {car.varients[versionCount].products.map((i, k) => (
          <React.StrictMode key={k}>
            <div
              className="cr_1ag"
              onClick={() => props.setState({ colorCount: k })}
              style={{
                background: i.colour_code,
                border: colorCount == k ? "2px solid gray" : null,
              }}
            />
            {i.color_name}
          </React.StrictMode>
        ))}
      </div>
    </React.StrictMode>
  );
}

export default CarDetails;
