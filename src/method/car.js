import axios from "axios";
import { makelinespace } from "../module/simple";

export async function getCar(props) {
  var path = window.location.pathname.split("/")[2];
  const url = "https://kalyanimotorsapi.kalyanicrm.com/api/";
  Promise.all([
    axios.get(url + "varientbike?name=" + makelinespace(path)),
    axios.get(url + "iconlocation"),
  ])
    .then((res) =>
      props.setState({
        car: res[0].data[0],
        locations_h: res[1].data,
        locations_b: res[1].data,
        location: res[1].data[0],
        loading: false,
      })
    )
    .catch(() => props.setState({ error: "Not Fount" }));
}
