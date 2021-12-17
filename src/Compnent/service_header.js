import { kalyaniLight } from "../module/logo";

function ServiceHeader() {
  return (
    <div className="service_header">
      <div className="header_container">
        <div className="home_base_logo_area">
          <img
            loading="lazy"
            src={kalyaniLight}
            className="home_base_logo"
            alt="Kalyani"
          />
          {/* <div onClick={() => setshow(true)} className="location_text">
            Banglure&nbsp;
            <img
              loading="lazy"
              src="https://cdn.zeplin.io/5da0780780829f083448125a/assets/B1A6D933-CB2C-4A34-B9F8-EFEB993DBA05.svg"
            />
          </div> */}
        </div>
        <div style={{ display: "flex" }}>
          <div className="header_text">Spares</div>
          <div className="header_text">Blog</div>
          <div className="header_text">More</div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHeader;
