import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import enquiry from "../method/enquiry";
import checkAnim from "../asset/checkAnim.gif";
import tickIcon from "../asset/check.JPG";
import "../style/pup1.css";

function EnquiryPopup({ props }) {
  const [booked, setbooked] = useState(0);
  const types = [
    "Get On-road Price", // 0
    "Get New Offer", // 1
    "Get EMI Offer", // 2
    "BOOK A TEST RIDE", // 3
    "ONLINE SERVICE BOOKING", // 4
    "Enquiry", // 5
    "Get Exshowroom Price", // 6
    "Price in my city", // 7
    "Register Service", // 8
    "Insurence Enquiry", // 9
    "Find Career at Kalyani Motors", // 10
    "Book Kalyani Driving School", //11
  ];

  const { enquiryPopup } = props.state;
  if (enquiryPopup === null) return null;
  return (
    <div className="pup1_a_a">
      <div className="pup1_a_b">
        {booked === 0 ? (
          <div className="pup1_a_c">{types[enquiryPopup.type]}</div>
        ) : (
          <></>
        )}
        {booked !== 0 ? (
          booked === 1 ? (
            <img alt="loading" className="pup1_a_d" src={checkAnim} />
          ) : (
            <img alt="done" className="pup1_a_d" src={tickIcon} />
          )
        ) : (
          <form
            id="booking_form"
            onSubmit={async (e) => {
              if (e.target.id.value.length !== 10) {
                alert("Not a valid phone number");
                return;
              }
              setbooked(1);
              const body = {
                name: e.target.name.value,
                phone: e.target.id.value,
                email: "",
                location: "",
                vehicle: enquiryPopup.car,
                purpose: types[enquiryPopup.type],
              };
              await enquiry(body);
              setTimeout(() => {
                setbooked(2);
                props.setState({ enquiryPopup: null });
              }, 1700);
            }}
          >
            <input
              placeholder="Name"
              className="pup1_a_e"
              type="text"
              required
              id="name"
            />
            <input
              placeholder="Phone Number"
              className="pup1_a_e"
              type="text"
              required
              id="id"
            />
            <button type="submit" className="pup1_a_f">
              {types[enquiryPopup.type]}
            </button>
          </form>
        )}
        {booked !== 0 ? (
          <p className="pup1_a_g">
            Thank you for your intrest in {enquiryPopup.car} We will get in
            touch with you soon...
          </p>
        ) : (
          ""
        )}

        <div
          onClick={() => props.setState({ enquiryPopup: null })}
          className="pup1_a_h"
        >
          Close
        </div>
      </div>
    </div>
  );
}

// function BikePopup({ show, imgs, close }) {
//   return (
//     <div
//       style={{
//         width: "100vw",
//         display: show ? "flex" : "none",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         height: "100vh",

//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: 800,
//           width: "100%",
//           display: show ? "" : "none",
//           position: "fixed",
//           // border: "1px solid gray",
//           boxShadow: "1px 1px 4px gray",
//           background: "white",
//         }}
//       >
//         <div
//           style={{
//             fontWeight: "bold",
//             fontSize: 22,
//             display: "flex",
//             justifyContent: "end",
//           }}
//         >
//           <div
//             style={{
//               cursor: "pointer",
//               padding: "10px 20px",
//               paddingBottom: 2,
//             }}
//             onClick={close}
//           >
//             X
//           </div>
//         </div>
//         <Carousel useKeyboardArrows>
//           {imgs.map((img) => (
//             <img
//               src={setUrlimg(img)}
//               style={{
//                 maxWidth: 700,
//                 width: "100%",
//                 objectFit: "cover",
//                 border: "1px solid #ccc",
//                 borderRadius: 8,
//               }}
//             />
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// }

export { EnquiryPopup };
