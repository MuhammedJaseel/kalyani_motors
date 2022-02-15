//  Go mechanic clone Design for kalyani moters
//  Design and json integration
//  MUHAMMED JASEEL
//  30 aug 2021

import { getImage } from "../module/api_init";
import { makespaceline } from "../module/simple";

const datas = [
  {
    title: "Anti-Rust Underbody Coating Service",
    img: "https://storage.googleapis.com/gomechanic_assets/MonsoonPackage/AntiRustSPRAY.png",
  },
  {
    title: "Brake Pads Replacement Service",
    img: "https://storage.googleapis.com/gomechanic_assets/MonsoonPackage/brake.png",
  },
  {
    title: "Tyre Replacement Service",
    img: "https://storage.googleapis.com/gomechanic_assets/MonsoonPackage/tyre%20replacement.png",
  },
  {
    title: "Miles Membership",
    img: "https://storage.googleapis.com/gomechanic_assets/MonsoonPackage/Miles%20membership.png",
  },
];

function HomeMunsoon({ props }) {
  const { sesonService, location } = props.state;
  console.log('sesonService')
  console.log(sesonService)
  return (
    <div className="hb_1a">
      <div className="hb_1d" />
      <div className="hb_1b">
        <div className="hb_1b_a">{sesonService.season_title}</div>
      </div>
      <div className="hb_1c">{sesonService.description}</div>
      <div className="row">
        {/* <img
          className="home_monsoon_arrow_button_left"
          src="https://gomechanic.in/graphics/Icons/rightArrow.svg"
          alt="img"
        /> */}
        <div className="home_monsoon_area">
          {sesonService.services.map((s, k) => (
            <div key={k}>
              <div
                className="home_monsoon_container"
                onClick={() =>
                  (window.location =
                    "/service/" +
                    makespaceline(s.title) +
                    "/" +
                    location.id +
                    "/seasonservice")
                }
              >
                <img
                  className="home_monsoon_img"
                  src={getImage(s.image)}
                  alt="img"
                />
              </div>
              <div className="home_monsoon_content_title">{s.title}</div>
            </div>
          ))}
        </div>
        {/* <img
          className="home_monsoon_arrow_button_right"
          alt="img"
          src="https://gomechanic.in/graphics/Icons/rightArrow.svg"
        /> */}
      </div>
    </div>
  );
}

export default HomeMunsoon;
