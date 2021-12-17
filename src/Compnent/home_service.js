import React from "react";
const dataaaaass = [
  {
    title: "Periodic Services",
    img: "https://cdn-icons-png.flaticon.com/512/4633/4633266.png",
  },
  {
    title: "Denting & Painting",
    img: "https://cdn-icons-png.flaticon.com/512/4632/4632964.png",
  },
  {
    title: "Batteries",
    img: "https://cdn-icons-png.flaticon.com/512/4632/4632988.png",
  },
  {
    title: "Car Spa & Cleaning",
    img: "https://cdn-icons-png.flaticon.com/512/4633/4633277.png",
  },
  {
    title: "AC Service & Repair",
    img: "https://cdn-icons-png.flaticon.com/512/4633/4633300.png",
  },
  {
    title: "Tyres & Wheel Care",
    img: "https://cdn-icons-png.flaticon.com/512/4633/4633298.png",
  },
  {
    title: "Insurance Claims",
    img: "https://cdn-icons-png.flaticon.com/512/4632/4632976.png",
  },
  {
    title: "Detailing Services",
    img: "https://cdn-icons-png.flaticon.com/128/4633/4633255.png",
  },
  {
    title: "Custom Services",
    img: "https://cdn-icons-png.flaticon.com/512/4633/4633266.png",
  },
  {
    title: "Windshields & Lights",
    img: "https://storage.googleapis.com/gomechanic_assets/category_icons_new/xxxhdpi/10.png",
  },
  {
    title: "Clutch & Fitments",
    img: "https://cdn-icons-png.flaticon.com/512/4632/4632964.png",
  },
  {
    title: "Miles Membership",
    img: "https://cdn-icons-png.flaticon.com/512/4633/4633277.png",
  },
];

function HomeService() {
  return (
    <div className="hb_1a">
      <div className="hb_1d" />
      <div className="hb_1b">Car Services Available In Bangalore</div>
      <div className="hb_1c">
        Get discounted professional periodic car service and repair, wheel care,
        cashless insurance claim and much more in the Silicon Valley of India;
        Bangalore.
      </div>
      <div style={{ flexWrap: "wrap", display: "flex", overflow: "auto" }}>
        {dataaaaass.map((d) => (
          <div
            className="home_services_each"
            onClick={() => window.location.assign("/service/" + d.title)}
          >
            <div className="home_services_img_area">
              <img className="home_services_each_img" src={d.img} alt="img" />
            </div>
            <div className="home_services_each_title">{d.title}</div>
            <div className="home_services_each_subtitle">
              We provide the better
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeService;
