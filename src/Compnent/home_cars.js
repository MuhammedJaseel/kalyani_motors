import React, { useState } from "react";

function HomeCars() {
  const items = [
    [
      {
        title: "Maruthi Swift",
        img: "https://imgd.aeplcdn.com/664x374/n/nnnl3ra_1429637.jpg?q=85",
        price: "5.3",
      },
      {
        img: "https://imgd.aeplcdn.com/664x374/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=0&q=85",
        title: "Maruti Suzuki Baleno",
        price: "9.5",
      },
      {
        title: "Alto xl",
        img: "https://imgd.aeplcdn.com/664x374/n/vjruesa_1463332.jpg?q=85",
        price: "3.1",
      },
    ],
    [
      {
        title: "Maruthi Swift",
        img: "https://imgd.aeplcdn.com/664x374/n/nnnl3ra_1429637.jpg?q=85",
        price: "5.3",
      },
    ],
    [
      {
        img: "https://imgd.aeplcdn.com/664x374/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=0&q=85",
        title: "Maruti Suzuki Baleno",
        price: "9.5",
      },
      {
        title: "Alto xl",
        img: "https://imgd.aeplcdn.com/664x374/n/vjruesa_1463332.jpg?q=85",
        price: "3.1",
      },
    ],
    [
      {
        title: "Alto xl",
        img: "https://imgd.aeplcdn.com/664x374/n/vjruesa_1463332.jpg?q=85",
        price: "3.1",
      },
    ],
  ];

  const [page, setpage] = useState(0);

  const tabs = [
    { title: "All" },
    { title: "New Cars" },
    { title: "Upcoming Models" },
    { title: "Populer Cars" },
  ];

  const selctedTypeStyle = {
    color: "#00afa0",
    fontWeight: "bold",
  };

  return (
    <div className="hb_1a">
      <div className="hb_1d" />
      <div className="hb_1b">Maruithi Suzuki - New Cars</div>
      <div className="hb_1b1">
        <div className="hb_1b2">
          {tabs.map((tab, k) => (
            <div className="hb_1b2a" onClick={() => setpage(k)}>
              <div
                className="hb_1b3"
                style={page === k ? selctedTypeStyle : {}}
              >
                {tab.title}
              </div>
              <div
                className="hb_1b3a"
                style={{ visibility: page === k ? null : "hidden" }}
              />
            </div>
          ))}
        </div>
        <div className="hb_1b2b" />
        <div className="hb_8a">
          {items[page].map((item) => (
            <div
              className="hb_8c"
              onClick={() => window.location.assign("/car/" + item.title)}
            >
              <div className="hb_8d">
                <img className="hb_8e" src={item.img} alt="img" />
              </div>
              <div className="hb_8f">
                <div className="hb_8j">{item.title}</div>
                <div className="hb_8g">₹ {item.price} Lakh</div>
                <div className="hb_8h">Avg Ex-showroom price </div>
                <div className="hb_8i">Show price in my city</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeCars;
