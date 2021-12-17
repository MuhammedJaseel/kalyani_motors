import React from "react";
import { appStore, playStore } from "../module/logo";

function HomeAppsAds() {
  return (
    <div className="hb_1a">
      <div className="hb_1d" />
      <div className="hb_1b">Download KalyaniMotors App</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="hb_2aa1">
          <img
            style={{ width: "299px", height: "353px", objectFit: "cover" }}
            src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/NearMe/gm-app-download.png"
            alt="Kalyani Mobile app"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: 25,
            }}
          >
            <div style={{ fontSize: 17 }}>
              Choose and book a seamless car service experience and get upto Rs
              500 off with the GoMechanic App
            </div>
            <div
              style={{
                margin: 20,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img height="50" src={playStore} alt="" />
              <img height="50" src={appStore} alt="" />
            </div>

            <div
              style={{
                display: "flex",
                padding: 4,
                border: "1px solid #e3ecf8",
                alignItems: "center",
              }}
            >
              <img
                className="india_img"
                src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/Homepage/AppDetails/F330B59C-DA83-4500-A7B2-A0D858252D88.svg"
                alt=""
              />
              <input
                placeholder="Mobile Number"
                maxLength="10"
                className="mobile_no_input"
              />
              <div className="get_app_link">GET APP LINK</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAppsAds;
