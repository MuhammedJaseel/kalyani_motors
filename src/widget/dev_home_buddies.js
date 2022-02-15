import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const featured_data = [
  {
    user_img: person1_img,
    user_name: "Vijay Ganta",
    user_experince: " 4+ Years Experience",
    car_serviced_week: "17 Car Serviced Last Week",
    languages_known: "Speak Hindi,English,Telungu",
    about_info:
      "Rajesh Ramavath explained to me the problem that arose and also did not charges too much. He has some nice customer servicing skills in Region, Hyderabad.",
  },
];

function HomeBuddiesEach() {
  return (
    <div>
      {featured_data.map((data, index) => {
        return (
          <div style={{ width: "430px", height: "395px" }}>
            <div className="service_buddies">
              <div style={{ display: "flex" }}>
                <img
                  src={person1_img}
                  alt="person"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ marginLeft: "15px" }}>
                  <div className="service_buddie_name">{data.user_name}</div>

                  <div style={{ flexDirection: "row", display: "flex" }}>
                    <div style={{ width: "30px" }}>
                      <img
                        className="rating_star"
                        src={star_icon}
                        alt=" rating_star"
                      />
                    </div>
                    <div style={{ width: "30px" }}>
                      <img
                        className="rating_star"
                        src={star_icon}
                        alt=" rating_star"
                      />
                    </div>
                    <div style={{ width: "30px" }}>
                      <img
                        className="rating_star"
                        src={star_icon}
                        alt=" rating_star"
                      />
                    </div>
                    <div style={{ width: "30px" }}>
                      <img
                        className="rating_star"
                        src={star_half_icon}
                        alt=" rating_star"
                      />
                    </div>
                  </div>
                  <ul style={{ marginInlineStart: "-20px", marginTop: "12px" }}>
                    <li className="buddies_rating_detail">
                      {" "}
                      {data.user_experince}
                    </li>
                    <li className="buddies_rating_detail">
                      {" "}
                      {data.car_serviced_week}
                    </li>
                    <li className="buddies_rating_detail">
                      {" "}
                      {data.languages_known}
                    </li>
                  </ul>
                </div>
              </div>
              <p className="buddies_service_details">
                Rajesh Ramavath explained to me the problem that arose and also
                did not charges too much. He has some nice customer servicing
                skills in Region, Hyderabad.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
function HomeBuddies() {
  return (
    <div>
      <div style={{ marginTop: "1.56rem" }}>
        <div
          style={{ width: "7rem", backgroundColor: "red", height: "0.2rem" }}
        />
        <div className="feature_service_header_div">
          <h2>Featured Service Buddies</h2>
        </div>
        <Carousel
          className="carousil"
          emulateTouch="true"
          interval={1000}
          centerSlidePercentage={30}
          thumbWidth={50}
          infiniteLoop="true"
          centerMode="true"
        >
          <div>
            <HomeBuddiesEach />
          </div>

          <div>
            <HomeBuddiesEach />
          </div>

          <div>
            <HomeBuddiesEach />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default HomeBuddies;
