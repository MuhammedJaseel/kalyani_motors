///////////////////////////////////////////////////////////////////////
//  Go mechanic clone Design for kalyani moters
//  Design
//  SOURAV
//  30 aug 2021
///////////////////////////////////////////////////////////////////////

const data = [
  {
    title: "Periodic Services",
    img: "https://storage.googleapis.com/gomechanic_assets/category_icons/schedule-services-v3.svg",
  },
  {
    title: "Denting & Painting",
    img: "https://storage.googleapis.com/gomechanic_assets/category_icons/denting-painting-v3.svg",
  },
  {
    title: "Batteries",
    img: "https://storage.googleapis.com/gomechanic_assets/category_icons/battery-v3.svg",
  },
  {
    title: "Car Spa & Cleaning",
    img: "https://storage.googleapis.com/gomechanic_assets/category_icons_new/xhdpi/4.png",
  },
  {
    title: "AC Service & Repair",
    img: "https://storage.googleapis.com/gomechanic_assets/category_icons_new/xxxhdpi/5.png",
  },
  {
    title: "Tyres & Wheel Care",
    img: "https://storage.googleapis.com/gomechanic_assets/category_icons/tyre-v3.svg",
  },
  {
    title: "Insurance Claims",
    img: "https://storage.googleapis.com/gomechanic_assets/category_icons/insurance-v3.svg",
  },
  {
    title: "Detailing Services",
    img: "https://storage.googleapis.com/gomechanic_assets/category_icons/cleaning-detailing-v3.svg",
  },
  {
    title: "Custom Services",
    img: "https://storage.googleapis.com/gomechanic_assets/category_icons_new/xhdpi/9.png",
  },
  {
    title: "Windshields & Lights",
    img: "https://storage.googleapis.com/gomechanic_assets/category_icons_new/xxxhdpi/10.png",
  },
  {
    title: "Clutch & Fitments",
    img: "https://storage.googleapis.com/gomechanic_assets/category_icons_new/xxxhdpi/11new.png",
  },
  {
    title: "Miles Membership",
    img: "https://storage.googleapis.com/gomechanic_assets/category_icons_new/xxxhdpi/13.png",
  },
];

function ServiceBodyHeader() {
  return (
    <div style={{ position: "sticky", top: 0 }}>
      <div className="service_body_header_container">
        <img
          src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/PcHomeForm/FF3733C0-2200-4562-A654-5C44240968CE.svg"
          className="home_body_header_leftarrow"
          alt="<"
        />
        <div className="home_body_header_maincontent">
          {data.map((item) => (
            <div
              style={{ minWidth: 150 }}
              onClick={() => window.location.replace("service/" + item.title)}
            >
              <center>
                <img height="40" src={item.img} alt="img" />
                <div style={{ fontSize: 12, color: "#4a4a4a" }}>
                  {item.title}
                </div>
              </center>
            </div>
          ))}
        </div>
        <img
          src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/PcHomeForm/FF3733C0-2200-4562-A654-5C44240968CE.svg"
          className="home_body_header_rightarrow"
          alt=">"
        />
      </div>
    </div>
  );
}

export default ServiceBodyHeader;
