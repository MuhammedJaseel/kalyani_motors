import React from "react";
import areena_logo from "../asset/areena_logo.png";
import nexa_logo from "../asset/nexa_logo.jpg";
import commercial_logo from "../asset/commercial_logo.jpg";
import "../style/hm2.css";

function HomeBrands() {
  const brands = [
    {
      bg: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/modules/generic-hero/arena-hero.ashx?rev=f323115f600e4592b68d82648cb4c8da&extension=webp",
      logo: areena_logo,
      title: "KALYANI ARENA",
      subtitle: "",
      color: "#3D4693",
      hvcolor: "white",
      link: "arena",
      // hvcolor: "rgba(255 , 255, 355, 0.8)",
    },
    {
      bg: "https://nexaprod5.azureedge.net/-/media/feature/nexawebsiteherobanner/bannerbrandimage/s-cross-home.webp?modified=20220119034741",
      logo: nexa_logo,
      title: "KALYANI NEXA",
      subtitle: "",
      color: "white",
      hvcolor: "black",
      link: "nexa",
      // hvcolor: "rgba(255 , 255, 355, 0.5)",
    },
    {
      bg: "https://marutistoragenew.blob.core.windows.net/msilintiwebimages/supercarry/Super-Carry-Baner_web_1366x538_01-brand.webp",
      logo: commercial_logo,
      title: "KALYANI COMMERCIAL",
      subtitle: "",
      color: "white",
      hvcolor: "#EE1C25",
      link: "commercial",
      // hvcolor: "rgba(100 , 100, 100, 0.8)",
    },
  ];
  return window.innerWidth < 600 ? null : (
    <div className="hm2_a">
      {brands.map((br, k) => (
        <div
          key={k}
          className="hm2_b"
          style={{
            background: `url(${br.bg}) no-repeat center center`,
          }}
          onClick={() => {
            window.location = "/allcars//" + br.link;
            // if (k === 0) window.location.assign(br.link);
            // else window.open(br.link, "_blank");
          }}
        >
          <div className="hm2_c" style={{ background: br.hvcolor }}>
            <div className="hm2_d">
              <img alt="img" className="hm2_e" src={br.logo} />
            </div>
            <div className="hm2_f" style={{ color: br.color }}>
              {br.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeBrands;
