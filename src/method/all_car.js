import axios from "axios";

export default async function getAllcars(props) {
  const url = "https://kalyanimotorsapi.kalyanicrm.com/api/";
  await Promise.all([
    axios.get(url + "product"),
    axios.get(url + "iconlocation"),
    axios.get(url + "arena"),
    axios.get(url + "arena"),
    axios.get(url + "arena"),
  ])
    .then((res) => {
      var locations_h = [];
      var locations_b = [];
      for (let i = 0; i < res[1].data.length; i++) {
        const element = res[1].data[i];
        if (element.city === 1) locations_b.push(element);
        else locations_h.push(element);
      }
      props.setState({
        items: [
          { season_name: "All", bikes: res[0].data },
          { season_name: "Arena Cars", bikes: res[2].data },
          { season_name: "Nexa Cars", bikes: res[3].data },
          { season_name: "Commercial Cars", bikes: res[4].data },
        ],
        // items: [{ season_name: "All", bikes: res[1].data }].concat(res[0].data),
        locations_h,
        locations_b,
        location: locations_b[0] ?? locations_h[0],
      });
    })
    .catch(() => props.setState({ error: "Not Fount" }));
  props.setState({ loading: false });
  return 0;
}
