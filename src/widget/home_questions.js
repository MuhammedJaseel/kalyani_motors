import React, { useState } from "react";

function HomeQuestions({ props }) {
  const { faq } = props.state;

  const [tab, settab] = useState(null);

  return (
    <div className="hb_1a" id="hm_f">
      <div className="hb_1d" />
      <div className="hb_1b">
        <div className="hb_1b_a"> Common FAQ </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "6px", width: "100%" }}>
          {faq.map((item, k) => (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => settab(tab === k ? null : k)}
            >
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
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeQuestions;
