import axios from "axios";

export async function getdataforContact(props) {
  const url = "https://kalyanimotorsapi.kalyanicrm.com/api/";

  await Promise.all([
    axios.get(url + "iconlocation"),
    axios.get(url + "commonfaq"),
    axios.get(url + "location"),
  ])
    .then(function (res) {
      var locations_h = [];
      var locations_b = [];
      for (let i = 0; i < res[0].data.length; i++) {
        const element = res[0].data[i];
        if (element.city === 1) locations_b.push(element);
        else locations_h.push(element);
      }

      ////////////////
      var locs = [];
      var insetred = false;
      for (let j = 0; j < res[2].data.length; j++) {
        const element = res[2].data[j];
        insetred = false;
        for (let i = 0; i < locs.length; i++) {
          const loc = locs[i];
          if (loc.title === element.category.title) {
            locs[i].data.push(element);
            insetred = true;
            break;
          }
        }
        if (!insetred)
          locs.push({ title: element.category.title, data: [element] });
      }
      ////////////////

      props.setState({
        faq: res[1].data,
        locations_h,
        locations_b,
        location: locations_b[0] ?? locations_h[0],
      });
    })
    .catch(() => props.setState({ error: "Not Fount" }));

  props.setState({ loading: false });
}
