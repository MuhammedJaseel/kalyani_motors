import React, { useState } from "react";

function HomeQuestions() {
  const items = [
    {
      title: "How many branches of Kalyai motors are Available in Bangluru?",
      desc: " We have more than 30+ highly equipped GoMechanic car service centres offering a variety of car services and operating at prime locations across Hyderabad. You can also opt for our doorstep pick-up service absolutely free of cost.",
    },
    {
      title: "How many branches of Kalyai motors are Available in Bangluru?",
      desc: " We have more than 30+ highly equipped GoMechanic car service centres offering a variety of car services and operating at prime locations across Hyderabad. You can also opt for our doorstep pick-up service absolutely free of cost.",
    },
  ];

  const [tab, settab] = useState(null);

  return (
    <div className="hb_1a">
      <div className="hb_1d" />
      <div className="hb_1b">Common FAQ</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "6px", width: "100%" }}>
          {items.map((item, k) => (
            <div style={{cursor:"pointer"}} onClick={() => settab(tab === k ? null : k)}>
              <div className="dropdown">
                <div className="dropdown_text">{item.title}</div>
                <img
                  src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/PcHomeForm/ic_expand_more.svg"
                  style={{
                    width: "15px",
                    height: "9.4px",
                    objectFit: "contain",
                  }}
                  alt="down arrow"
                />
              </div>
              <div
                className="dropdown_data"
                style={{ display: k === tab ? "" : "none" }}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeQuestions;
