import axios from "axios";
import { makespaceline } from "../module/simple";

export async function getServices(props) {
  var paths = window.location.pathname.split("/");
  await axios
    .get("https://kalyanimotorsapi.kalyanicrm.com/api/seasons")
    .then((res) => props.setState({ seasonCars: res.data }))
    .catch(() => props.setState({ error: "Not Fount" }));

  const sApi =
    "https://kalyanimotorsapi.kalyanicrm.com/api/" +
    (paths[4] === "seasonservice" ? "attachseasonservice" : "service");
  await axios
    .get(sApi)
    .then((res) => {
      var data = paths[4] === "seasonservice" ? res.data[0].services : res.data;
      console.log(data);
      var service = data[0];
      for (let i = 0; i < data.length; i++) {
        if (paths[2] === makespaceline(data[i].title)) {
          service = data[i];
          break;
        }
      }
      props.setState({ services: data, service });
    })
    .catch(() => props.setState({ error: "Not Fount" }));

  await axios
    .get("https://kalyanimotorsapi.kalyanicrm.com/api/iconlocation")
    .then((res) => {
      var locations_h = [];
      var locations_b = [];
      props.setState({ location: res.data[0] });
      for (let i = 0; i < res.data.length; i++) {
        const element = res.data[i];
        if (element.city === 1) locations_b.push(element);
        else locations_h.push(element);
        if (paths[3] === element.id) props.setState({ location: element });
      }
      props.setState({ locations_h: res.data, locations_b: res.data });
    })
    .catch(() => props.setState({ error: "Not Fount" }));
  props.setState({ loading: false });

  await axios
    .get("https://kalyanimotorsapi.kalyanicrm.com/api/commonfaq")
    .then((res) => props.setState({ faq: res.data }))
    .catch(() => props.setState({ error: "Not Fount" }));

  return 0;
}
