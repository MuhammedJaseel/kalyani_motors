import { getServiceImage } from "../module/api_init";
import mark_icon from "../asset/mark.svg";

export default function ServiceAll({ props }) {
  const { service } = props.state;
  return (
    <div className="service_body">
      <div className="service_title">{service.title}</div>

      {service.servicetype.map((item) => (
        <div className="service_each_area">
          <img
            className="service_each_img"
            src={getServiceImage(item.image)}
            alt="img"
          />
          <div style={{ width: "100%", paddingLeft: 20 }}>
            <div className="service_each_title_bar">
              <div className="service_each_title">{item.title}</div>
              <div className="service_each_time">
                <div className="service_each_time_icon" />
                {item.duration}
              </div>
            </div>
            <div className="service_each_subtitle">
              • {item.service_period}&nbsp;&nbsp;&nbsp; • {item.warranty}
            </div>
            <div className="service_each_data">
              {item.servicelist.map((it) => (
                <div style={{ width: "50%", padding: "5px 0px" }}>
                  <img style={{ marginRight: 7 }} alt="img" src={mark_icon} />
                  {it.service}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "end" }}>
              <button
                onClick={() =>
                  props.setState({ enquiryPopup: { car: item.title, type: 8 } })
                }
                className="service_select"
              >
                REGISTER YOUR SERVICE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
