import axios from "axios";

export async function getAllData(props) {
  const url = "https://kalyanimotorsapi.kalyanicrm.com/api/";
  Promise.all([
    axios.get(url + "enquirybannerimg"), //  0
    axios.get(url + "policybannerimg"), //  1
    axios.get(url + "seasons"), //  2
    axios.get(url + "commonfaq"), // 3
    axios.get(url + "service"), //  4
    axios.get(url + "banner"), //  5
    axios.get(url + "iconlocation"), //  6
    axios.get(url + "attachseasonservice"), //  7
  ])
    .then(function (res) {
      var locations_h = [];
      var locations_b = [];
      for (let i = 0; i < res[6].data.length; i++) {
        const element = res[6].data[i];
        if (element.city === 1) locations_b.push(element);
        else locations_h.push(element);
      }
      props.setState({
        bannar_e: res[0].data[0].banner_img,
        bannar_p: res[1].data[0].policy_img,
        seasonCars: res[2].data,
        faq: res[3].data,
        services: res[4].data,
        banners: res[5].data,
        sesonService: res[7].data[0],
        locations_h,
        locations_b,
        location: locations_b[0] ?? locations_h[0],
      });
    })
    .catch(() => props.setState({ error: "Not Fount" }));

  await axios
    .get(url + "product")
    .then((res) => {
      var data = res.data;
      var datas = [
        { id: "body", title: "Body", cat: [] },
        { id: "color_name", title: "Color", cat: [] },
        { id: "transmission", title: "Transmission", cat: [] },
        { id: "fuel", title: "Fuel", cat: [] },
      ];
      var found = null;
      for (let i = 0; i < data.length; i++) {
        found = null;
        for (let j = 0; j < datas[0].cat.length; j++)
          if (datas[0].cat[j].title === data[i].body) {
            found = j;
            break;
          }
        if (found !== null) datas[0].cat[found].cars.push(data[i]);
        else datas[0].cat.push({ title: data[i].body, cars: [data[i]] });
        // //////////////////
        found = null;
        for (let j = 0; j < datas[1].cat.length; j++)
          if (datas[1].cat[j].title === data[i].color_name) {
            found = j;
            break;
          }
        if (found !== null) datas[1].cat[found].cars.push(data[i]);
        else datas[1].cat.push({ title: data[i].color_name, cars: [data[i]] });
        // //////////////////
        found = null;
        for (let j = 0; j < datas[2].cat.length; j++)
          if (datas[2].cat[j].title === data[i].transmission) {
            found = j;
            break;
          }
        if (found !== null) datas[2].cat[found].cars.push(data[i]);
        else
          datas[2].cat.push({ title: data[i].transmission, cars: [data[i]] });
      }
      datas[3].cat.push({ title: "Petrol", cars: data });
      props.setState({ findCars: datas });
    })
    .catch(() => props.setState({ error: "Not Fount" }));
  props.setState({ loading: false });
  return 0;
}

var type = "c";
export function homeCarAndServiceSearch(e, props) {
  e.preventDefault();
  if (e._reactName === "onChange")
    if (e.target.id === "type") type = e.target.type.value;
    else if (type === "c") {
      var data = [];
      for (let i = 0; i < props.state.allCars.length; i++) {
        if (data.length === 5) break;
        const element = props.state.allCars[i];
        if (searchBYtext(element.name, e.target.value)) data.push(element);
      }
      props.setState({ homeSearchs: data });
    } else {
      var data = [];
      for (let i = 0; i < props.state.services.length; i++) {
        if (data.length === 5) break;
        const element = props.state.services[i];
        if (searchBYtext(element.title, e.target.value)) data.push(element);
      }
      props.setState({ homeSearchs: data });
    }
  else {
    // console.log(e.target.type.value);
  }
}

function searchBYtext(ss, s) {
  ss = ss.toUpperCase();
  s = s.toUpperCase();
  if (s.length < 3) return false;
  var ls = ss.split(s);
  if (ls.length < 2) return false;
  return true;
}
