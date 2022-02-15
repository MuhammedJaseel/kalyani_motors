import axios from "axios";

export async function getdataforabout(props) {
  await axios
    .get("https://kalyanimotorsapi.kalyanicrm.com/api/iconlocation")
    .then((res) => {
      var locations_h = [];
      var locations_b = [];
      for (let i = 0; i < res.data.length; i++) {
        const element = res.data[i];
        if (element.city === 1) locations_b.push(element);
        else locations_h.push(element);
      }
      props.setState({
        locations_h,
        locations_b,
        location: locations_b[0] ?? locations_h[0],
      });
    })
    .catch(() => props.setState({ error: "Error on loading." }));
  props.setState({ loading: false });
}
