import React from "react";

function CarDetails() {
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
      <div className="cr_1e">Maruthi Suzuki Swift</div>
      <div className="cr_1f">
        {star}
        {star}
        {star}
        {star}
        {star}
      </div>
      <div className="cr_1g">
        <div className="cr_1g_a">OVERVIEW</div>
        <div className="cr_1g_a">IMAGES</div>
        <div className="cr_1g_a">OFFERS</div>
        <div className="cr_1g_a">VERSIONS</div>
        <div className="cr_1g_a">ALTERNATIVE</div>
        <div className="cr_1g_a">COLORS</div>
        <div className="cr_1g_a">USER REVIEWS</div>
      </div>
      {/* ////////////car//////////// */}
      <div className="cr_1h">
        <div className="cr_1i">
          <img
            className="cr_1j"
            src="https://imgd.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg"
            alt="Car"
          />
          <div className="row">
            <div className="cr_1k">Color</div>
            <div className="cr_1k">Images</div>
          </div>
        </div>
        <div className="cr_1m">
          <div className="row">
            <div className="cr_1n">
              <div className="cr_1s">
                <div className="cr_1o">
                  <div className="cr_1p">Version</div>
                  <div className="cr_1q">XE</div>
                </div>
                <div className="cr_1r">arrow</div>
              </div>
            </div>
            <div className="cr_1n">
              <div className="cr_1s">
                <div className="cr_1t">
                  <div className="cr_1p">City</div>
                  <div className="cr_1q">Show Price In My city</div>
                </div>
                <div className="cr_1w">arrow</div>
              </div>
            </div>
          </div>
          <div className="cr_1x">$ 11.99 Lack</div>
          <div className="cr_1y">Avarage Ex-showroom Price</div>
          <div className="cr_1z">
            <div className="cr_1u">
              <div>
                <div className="cr_1aa">Calculate Your EMI</div>
                <div className="cr_1ab">EMI Calculater</div>
              </div>
              <div className="cr_1ac">Get Emi Offer</div>
            </div>
          </div>
          <div className="cr_1ad">Compare with Maruthi Suzuki Swift Old</div>
          <div className="cr_1ae">Get September Offer</div>
        </div>
      </div>
      {/* ////////////////////////////////////////// */}
    </React.StrictMode>
  );
}

export default CarDetails;
