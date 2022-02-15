import React from "react";
import AboutUs from "./screen/aboutus";
import AllCars from "./screen/all_car";
import Car from "./screen/car";
import ContactPage from "./screen/contact";
import HomePage from "./screen/home";
import Service from "./screen/service";

export default function App({ props }) {
  var path = window.location.pathname.split("/")[1];
  if (path === "service") return <Service props={props} />;
  if (path === "car") return <Car props={props} />;
  if (path === "allcars") return <AllCars props={props} />;
  if (path === "contactus") return <ContactPage />;
  if (path === "about") return <AboutUs />;
  return <HomePage props={props} />;
}
