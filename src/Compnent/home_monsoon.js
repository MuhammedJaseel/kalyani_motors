//  Go mechanic clone Design for kalyani moters
//  Design and json integration
//  MUHAMMED JASEEL
//  30 aug 2021

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

function HomeMunsoon() {
  return (
    <div className="hb_1a">
      <div className="hb_1d" />
      <div className="hb_1b">Kalyani Motors Monsoon Mist</div>
      <div className="hb_1c">
        Hand-Picked Car Services For Your Monsoon Needs
      </div>
      <div className="row">
        <img
          className="home_monsoon_arrow_button_left"
          src="https://gomechanic.in/graphics/Icons/rightArrow.svg"
          alt="img"
        />
        <div className="home_monsoon_area">
          {datas.map((data) => (
            <div>
              <div className="home_monsoon_container">
                <img className="home_monsoon_img" src={data.img} alt="img" />
              </div>
              <div className="home_monsoon_content_title">{data.title}</div>
            </div>
          ))}
        </div>
        <img
          className="home_monsoon_arrow_button_right"
          alt="img"
          src="https://gomechanic.in/graphics/Icons/rightArrow.svg"
        />
      </div>
    </div>
  );
}

export default HomeMunsoon;
