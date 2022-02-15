import React, { useState } from "react";
import checkAnim from "../asset/checkAnim.gif";
import tickIcon from "../asset/check.JPG";
import "../style/hm3.css";
import enquiry from "../method/enquiry";
import { getImage } from "../module/api_init";

function HomeOnroudPrice({ props }) {
  const [booked, setbooked] = useState(0);
  const [bike, setbike] = useState("");

  const { allCars, bannar_e } = props.state;

  return (
    <div className="center">
      <div
        className="hm3_Container2"
        style={{ backgroundImage: "url(" + getImage(bannar_e) + ")" }}
      >
        <div className="hm3_left-div">
          {booked === 0 ? (
            <div className="cm1_hm_title">On-road price</div>
          ) : (
            <></>
          )}
          {booked !== 0 ? (
            booked === 1 ? (
              <img
                alt="Img"
                style={{ padding: "20px 103px", width: 100 }}
                src={checkAnim}
              />
            ) : (
              <img
                alt="Img"
                style={{ padding: "20px 103px", width: 100 }}
                src={tickIcon}
              />
            )
          ) : (
            <form
              id="booking_form1"
              onSubmit={async (e) => {
                if (e.target.id.value.length !== 10) {
                  alert("Not a valid phone number");
                  return;
                }
                setbooked(1);
                setbike(e.target.car.value);
                const body = {
                  name: e.target.name.value,
                  phone: e.target.id.value,
                  email: "",
                  location: "",
                  vehicle: e.target.car.value,
                  purpose: "On Road Price",
                };
                await enquiry(body);
                setTimeout(() => setbooked(2), 1700);
              }}
            >
              <input
                placeholder="Enter Your Name"
                className="hm3_input_tab"
                type="text"
                id="name"
                required
              />
              <input
                placeholder="Enter Your Phone Number"
                className="hm3_input_tab"
                type="text"
                id="id"
                required
              />
              <select className="hm3_input_tab" id="car" required>
                {allCars.map((bike, k) => (
                  <option value={bike.name} key={k}>
                    {bike.name}
                  </option>
                ))}
                <option>Others</option>
              </select>
              <button type="submit" className="hm3_btn">
                Check on-road price
              </button>
            </form>
          )}
          {booked !== 0 ? (
            <p
              style={{
                padding: "0px 4px",
                fontSize: 14,
                color: "#4d5057",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Thank you for your intrest in {bike} We will get in touch with you
              soon...
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeOnroudPrice;
