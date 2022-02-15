import React from "react";
import { appStore, kalyaniLight, playStore } from "../module/logo";

function HomeFooter({ props }) {
  const { location } = props.state;

  const title = [
    "HOME",
    "NEW CARS",
    "ONLINE BOOKING",
    "ABOUT US",
    "CONTACT US",
  ];
  const data = [
    [
      {
        title: "Home",
        route: "/",
        fun: () => (window.location = "/"),
      },
    ],
    [
      {
        title: "Areena Cars",
        route: null,
        fun: () => (window.location = "/allcars//arena"),
      },
      {
        title: "Nexa Cars",
        route: null,
        fun: () => (window.location = "/allcars//nexa"),
      },
      {
        title: "Commericial Cars",
        route: null,
        fun: () => (window.location = "/allcars//commercial"),
      },
      {
        title: "Dream Cars",
        route: null,
        fun: () => (window.location = "/allcars//dreamcars"),
      },
      {
        title: "Used Cars",
        route: null,
        fun: () => {},
      },
    ],
    [
      {
        title: "Service Booking",
        route: null,
        fun: () => props.setState({ enquiryPopup: { car: "", type: 8 } }),
      },
      {
        title: "Test Drive Booking",
        route: null,
        fun: () => props.setState({ enquiryPopup: { car: "", type: 3 } }),
      },
      {
        title: "Insurence",
        route: null,
        fun: () => props.setState({ enquiryPopup: { car: "", type: 9 } }),
      },
      {
        title: "Careers At Kalyani",
        route: null,
        fun: () => props.setState({ enquiryPopup: { car: "", type: 10 } }),
      },
      {
        title: "Maruthi Driving School",
        route: null,
        fun: () => props.setState({ enquiryPopup: { car: "", type: 11 } }),
      },
    ],
    [
      {
        title: "About Kalyani",
        route: "/about/about",
        fun: () => (window.location = "/about/about"),
      },
      {
        title: "Why Kalyani Motors",
        route: "/about/whykalyani",
        fun: () => (window.location = "/about/whykalyani"),
      },
      {
        title: "Quality Policy",
        route: "/about/qualitypolicy",
        fun: () => (window.location = "/about/qualitypolicy"),
      },
      {
        title: "Awards And Achevements",
        route: "/about/awards",
        fun: () => (window.location = "/about/awards"),
      },
      {
        title: "Maruthi Driving School",
        route: "/about/drivingschool",
        fun: () => (window.location = "/about/drivingschool"),
      },
      {
        title: "Careers",
        route: "/about/careers",
        fun: () => (window.location = "/about/careers"),
      },
      {
        title: "Finance Junction",
        route: null,
        fun: () => {},
      },
      {
        title: "Gallery",
        route: null,
        fun: () => {},
      },
      {
        title: "News And Events",
        route: null,
        fun: () => {},
      },
    ],
    [
      {
        title: "Contact Us",
        route: "/contactus",
        fun: () => (window.location = "/contactus"),
      },
      {
        title: "Sales",
        route: "/allcars",
        fun: () => (window.location = "/allcars"),
      },
      {
        title: "Service",
        route: "/service",
        fun: () => (window.location = "/service"),
      },
      {
        title: "True Value",
        route: null,
        fun: () => {},
      },
      {
        title: "Sales Commercial",
        route: null,
        fun: () => {},
      },
      {
        title: "Corparate Office",
        route: null,
        fun: () => {},
      },
    ],
  ];

  return (
    <React.StrictMode>
      <div className="footer_top" id="hm_g">
        {data.map((datas, k) => (
          <div className="footer_top_each">
            <div className="footer_top_title">{title[k]}</div>
            {datas.map((item, j) => (
              <div
                style={
                  item.route === window.location.pathname
                    ? { color: "yellow" }
                    : {}
                }
                key={j}
                onClick={item.fun}
                className="footer_top_button"
              >
                {item.title}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="footer_down">
        <div>
          <img loading="lazy" src={kalyaniLight} alt="Kalyani" height="60" />
          <div className="footer_address">{location.address}</div>
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
            <div className="footer_contact_data">{location.email}</div>
          </div>
          <div className="footer_contact_each">
            <div className="footer_contact_icon_phone" />
            <div className="footer_contact_title">Phone Number</div>
            <div className="footer_contact_data">{location.phone_number}</div>
          </div>
          <div className="footer_contact_each">
            <div className="footer_contact_icon_callender" />
            <div className="footer_contact_title">Working Days</div>
            <div className="footer_contact_data">{location.working_days}</div>
          </div>
          <div className="footer_contact_each">
            <div className="footer_contact_icon_clock" />
            <div className="footer_contact_title">Working Hours</div>
            <div className="footer_contact_data">{location.working_hours}</div>
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
