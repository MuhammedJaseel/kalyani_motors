import React, { useState } from "react";
import { kalyaniLight } from "../module/logo";

const items = [
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/delhi-dev.png",
    title: "Delhi",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/gurgaon-dev.png",
    title: "Gurgaon",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/noida-dev.png",
    title: "Noida",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/gaziabad-dev.png",
    title: "Ghaziabad",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/mumbai-dev.png",
    title: "Mumbai",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/pune-dev.png",
    title: "Pune",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/hyderabad-dev.png",
    title: "Hyderabad",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/bengaluru-dev.png",
    title: "Bangalore",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/chennai_new.png",
    title: "Chennai",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/jaipur-new.png",
    title: "Jaipur",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/chandigarh.png",
    title: "Chandigarh",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/Ahemdabad_icons-01.png",
    title: "Ahmedabad",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/Lucknow-Web.png",
    title: "Lucknow",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/Kolkata_web.png",
    title: "Kolkata",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/navi-mumbai-dev.png",
    title: "Navi Mumbai",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/thane.png",
    title: "Thane",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/greater_noida.png",
    title: "Greater Noida",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/faridabad-dev.png",
    title: "Faridabad",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/Kalyan-01.png",
    title: "Kalyan",
  },
  {
    img: "https://storage.googleapis.com/gomechanic_assets/cities/nagpur_web.png",
    title: "Nagpur",
  },
  {
    img: "https://storage.googleapis.com/gomechanic_assets/cities/kanpur_web.png",
    title: "Kanpur",
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/surat-RED.png",
    title: "Surat",
  },
  {
    img: "https://storage.googleapis.com/gomechanic_assets/cities/coimbatore_web.png",
    title: "Coimbatore",
  },
  {
    img: "https://storage.googleapis.com/gomechanic_assets/cities/kochi_web.png",
    title: "Kochi",
  },
  {
    img: "https://storage.googleapis.com/gomechanic_assets/cities/Indore-red.png",
    title: "",
  },
  {
    img: "https://storage.googleapis.com/gomechanic_assets/cities/patna.png",
    title: "Patna",
  },
  {
    img: "https://storage.googleapis.com/gomechanic_assets/cities/Agra.png",
    title: "Agra",
  },
  {
    img: "https://storage.googleapis.com/gomechanic_assets/cities/Meerut.png",
    title: "Meerut",
  },
  {
    img: "https://storage.googleapis.com/gomechanic_assets/cities/Ludhiana.png",
    title: "Ludhiana",
  },
  {
    img: "https://storage.googleapis.com/gomechanic_assets/cities/Bhopal.png",
    title: "Bhopal",
  },
  {
    img: "https://storage.googleapis.com/gomechanic_assets/cities/Visakhapatnam.png",
    title: "Visakhapatnam",
  },
];

function CarsettingPopup() {
  return (
    <div className="car_setting_popup">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="car_setting_popup_title">
          Find Your Car or Car Service
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="car_setting_popup_body">
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="car_setting_popup_subtitle">
          <div className="row">Get instant quotes for your car service</div>
          <div className="row">
            <div>Our Services</div>&nbsp;|&nbsp;<div>Our Services</div>
            &nbsp;|&nbsp;<div>About Us</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeTop() {
  const [show, setshow] = useState(false);
  return (
    <div className="home_header_img">
      <div className="header_container">
        <div className="home_base_logo_area">
          <img
            loading="lazy"
            src={kalyaniLight}
            className="home_base_logo"
            alt="KAlyani"
          />
          <div onClick={() => setshow(true)} className="location_text">
            Banglure&nbsp;
            <img
              alt="img"
              loading="lazy"
              src="https://cdn.zeplin.io/5da0780780829f083448125a/assets/B1A6D933-CB2C-4A34-B9F8-EFEB993DBA05.svg"
            />
          </div>
        </div>
        <div className="header_container_menu">
          <div className="header_text">+91 9544013463</div>
          <div className="header_text">Blog</div>
          <div className="header_text">More</div>
        </div>
      </div>
      <CarsettingPopup />
      <div
        style={{ visibility: show ? "visible" : "hidden" }}
        className="mylocation_popup_screen"
      >
        <div className="mylocation_popup">
          <div className="row">
            <div style={{ width: "100%" }}>
              <div className="mylocation_popup_title">Choose Your City</div>
              <div className="mylocation_popup_subtitle">
                This would help us in providing you quick service.
              </div>
            </div>
            <img
              width="20"
              alt="img"
              style={{ cursor: "pointer" }}
              onClick={() => setshow(false)}
              src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/Homepage/AE06F0CE-9D71-4A10-BE38-38C5AA880DE7.svg"
            />
          </div>
          <div className="mylocation_popup_body">
            {items.map((item) => (
              <div className="mylocation_each">
                <img width="50" src={item.img} alt="img" />
                <div>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export { HomeTop, CarsettingPopup };
