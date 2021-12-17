import React from "react";

function HomeBrands() {
  const link = [{}, {}, {}, {}];
  const brands = [
    {
      bg: "https://cdn.bajajauto.com/-/media/bajajauto/home/slide-thumb-images/desktop/chetak-desktop.ashx",
      logo: "https://cdn.bajajauto.com/-/media/Images/Bajaj-Auto/Home-page/Level-1-Block/logos/pro-biking-ktm-logo/logo.ashx",
      title: "KALYANI BAJAJ",
      subtitle: "",
      color: "#0664AE",
      hvcolor: "rgba(255 , 255, 355, 0.8)",
    },
    {
      bg: "https://cdn.bajajauto.com/-/media/bajajauto/home/slide-thumb-images/desktop/chetak-desktop.ashx",
      logo: "https://cdn.bajajauto.com/-/media/Images/Bajaj-Auto/Home-page/Level-1-Block/logos/pro-biking-ktm-logo/logo.ashx",
      title: "KALYANI KTM",
      subtitle: "",
      color: "orange",
      hvcolor: "rgba(255 , 255, 355, 0.5)",
    },
    {
      bg: "https://cdn.bajajauto.com/-/media/bajajauto/home/slide-thumb-images/desktop/chetak-desktop.ashx",
      logo: "https://cdn.bajajauto.com/-/media/Images/Bajaj-Auto/Home-page/Level-1-Block/logos/pro-biking-ktm-logo/logo.ashx",
      title: "KALYANI CHETAK",
      subtitle: "",
      color: "white",
      hvcolor: "rgba(100 , 100, 100, 0.8)",
    },
    {
      bg: "https://cdn.bajajauto.com/-/media/bajajauto/home/slide-thumb-images/desktop/chetak-desktop.ashx",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Husqvarna_logo_ArtWW.svg/1200px-Husqvarna_logo_ArtWW.svg.png",
      title: "KALYANI HUSQVARNA",
      subtitle: "",
      color: "darkblue",
      hvcolor: "rgba(255 , 255, 355, 0.8)",
    },
  ];
  return window.innerWidth < 600 ? (
    <div className="center">
      <div className="hm_bd1_a">
        <div className="cm1_hm_title">Our Brands</div>
        <div className="center">
          <div className="hm_bd1_aba">
            {link.map((brand, k) => (
              <div
                key={k}
                className="hm_bd1_abaa"
                onClick={() => {
                  if (k === 0) window.location.assign(brand.link);
                  else window.open(brand.link, "_blank");
                }}
              >
                <div className="hm_bd1_abaaa">
                  <img
                    alt="Img"
                    className="hm_bd1_abaaaa"
                    // src={baseUrllogo + brand.brand_logo}
                  />
                </div>
                <div className="hm_bd1_abaab">{brand.brand_name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="hm_bd2_ab">
      {brands.map((br, k) => (
        <div
          key={k}
          className="hm_bd2_aba"
          style={{
            background: `url(${br.bg}) no-repeat center center`,
            backgroundSize: "cover",
          }}
          onClick={() => {
            if (k === 0) window.location.assign(link[k].link);
            else window.open(link[k].link, "_blank");
          }}
        >
          <div className="hm_bd2_abab" style={{ background: br.hvcolor }}>
            <div className="hm_bd2_abaaa">
              <img className="hm_bd2_abaaaa" src={br.logo} />
            </div>
            <div className="hm_bd2_abaab" style={{ color: br.color }}>
              {br.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeBrands;
