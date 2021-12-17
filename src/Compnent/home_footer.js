import React from "react";
import { appStore, kalyaniLight, playStore } from "../module/logo";
const title = [
  "ABOUT US",
  "OUR SERVICES",
  "LUXURY BRANDS",
  "POPULAR BRANDS",
  "POPULAR AREAS NEAR YOU",
];

const data = [
  [
    "FAQs",
    "Contact Us",
    "Careers ",
    "Terms and Conditions",
    "Privacy Policy",
    "GoMechanic Partners",
    "Workshop Locator",
    "Offers",
    "Reviews",
    "Directory",
  ],
  [
    "Scheduled Services",
    "AC Services",
    "Cleaning & Detailing",
    "Lights & Fitments",
    "Denting Painting",
    "Insurance Services",
    "Custom Repair",
    "Batteries",
    "Tyres",
    "Detailing Services",
    "Windshields Glass",
  ],
  [
    "Mercedes",
    "BMW",
    "Audi",
    "Volvo",
    "Mitsubishi",
    "Jaguar",
    "Porsche",
    "Rolls Royce",
    "Ferrari",
    "Land Rover",
  ],
  [
    "Maruti Suzuki",
    "Hyundai",
    "Honda",
    "Toyota",
    "Tata",
    "Mahindra",
    "Chevrolet",
    "Fiat",
    "Renault",
    "Kia",
    "Skoda",
    "Volkswagen",
  ],
  [
    "Garage near me in Electronic City",
    "Garage near me in Whitefield",
    "Garage near me in Indiranagar",
    "Garage near me in Vijaynagar",
    "Garage near me in HSR Layout",
    "Garage near me in Koramangala",
    "Garage near me in Jaya Nagar",
    "Garage near me in Marathahalli",
  ],
];
function HomeFooter() {
  return (
    <React.StrictMode>
      <div className="footer_top">
        {data.map((datas, k) => (
          <div className="footer_top_each">
            <div className="footer_top_title">{title[k]}</div>
            {datas.map((item) => (
              <div className="footer_top_button">{item}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="footer_down">
        <div>
          <img loading="lazy" src={kalyaniLight} alt="Kalyani" height="60" />
          <div className="footer_address">
            No. 24/1 {"&"} 25/1, Near Nayandahalli Signal, Mysore Rd Junction,
            Nayandahalli. Bangalore-560 039. Karnataka, India.
          </div>
          <div className="footer_socialmedia_icon">
            <div className="footer_contact_icon_fb" />
            <div className="footer_contact_icon_twitter" />
            <div className="footer_contact_icon_instagram" />
            <div className="footer_contact_icon_whatsapp" />
            <div className="footer_contact_icon_youtube" />
          </div>
        </div>
        <div className="footer_contact">
          <div className="footer_contact_each">
            <div className="footer_contact_icon_email" />
            <div className="footer_contact_title">Email</div>
            <div className="footer_contact_data">kalyanimotors@gmail.com</div>
          </div>
          <div className="footer_contact_each">
            <div className="footer_contact_icon_phone" />
            <div className="footer_contact_title">Phone Number</div>
            <div className="footer_contact_data">080 209999999</div>
          </div>
          <div className="footer_contact_each">
            <div className="footer_contact_icon_callender" />
            <div className="footer_contact_title">Working Days</div>
            <div className="footer_contact_data">Monday - Saterday</div>
          </div>
          <div className="footer_contact_each">
            <div className="footer_contact_icon_clock" />
            <div className="footer_contact_title">Working Hours</div>
            <div className="footer_contact_data">9:00 am to 6:00 pm</div>
          </div>
        </div>
        <div className="footer_applink">
          <img width="180" alt="img" src={playStore} />
          <br />
          <img width="180" alt="img" src={appStore} />
        </div>
      </div>
      <div className="footer_copyright">© 2021-2022 Kalyani Devops</div>
    </React.StrictMode>
  );
}
export default HomeFooter;
