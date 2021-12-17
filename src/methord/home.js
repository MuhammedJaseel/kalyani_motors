import { apiInitGet } from "../module/api_init";

const dev_dome_data = {
  phone_1: "+91 9544013463",
  phone_2: "+91 9544013463",
  locations: {
    banglure: [
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/delhi-dev.png",
        title: "Delhi",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/gurgaon-dev.png",
        title: "Gurgaon",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/noida-dev.png",
        title: "Noida",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/gaziabad-dev.png",
        title: "Ghaziabad",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/mumbai-dev.png",
        title: "Mumbai",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/pune-dev.png",
        title: "Pune",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/hyderabad-dev.png",
        title: "Hyderabad",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/bengaluru-dev.png",
        title: "Bangalore",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/chennai_new.png",
        title: "Chennai",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/jaipur-new.png",
        title: "Jaipur",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/chandigarh.png",
        title: "Chandigarh",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/Ahemdabad_icons-01.png",
        title: "Ahmedabad",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/Lucknow-Web.png",
        title: "Lucknow",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/Kolkata_web.png",
        title: "Kolkata",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/navi-mumbai-dev.png",
        title: "Navi Mumbai",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/thane.png",
        title: "Thane",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/greater_noida.png",
        title: "Greater Noida",
      },
      {
        id: 1,
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/faridabad-dev.png",
        title: "Faridabad",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/Kalyan-01.png",
        title: "Kalyan",
      },
      {
        id: 1,
        img: "https://storage.googleapis.com/gomechanic_assets/cities/nagpur_web.png",
        title: "Nagpur",
      },
      {
        id: 1,
        img: "https://storage.googleapis.com/gomechanic_assets/cities/kanpur_web.png",
        title: "Kanpur",
      },
      {
        id: 1,
        img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/Cities/surat-RED.png",
        title: "Surat",
      },
    ],
    hyderabad: [
      {
        id: 1,
        img: "https://storage.googleapis.com/gomechanic_assets/cities/coimbatore_web.png",
        title: "Coimbatore",
      },
      {
        id: 1,
        img: "https://storage.googleapis.com/gomechanic_assets/cities/kochi_web.png",
        title: "Kochi",
      },
      {
        id: 1,
        img: "https://storage.googleapis.com/gomechanic_assets/cities/Indore-red.png",
        title: "",
      },
      {
        id: 1,
        img: "https://storage.googleapis.com/gomechanic_assets/cities/patna.png",
        title: "Patna",
      },
      {
        id: 1,
        img: "https://storage.googleapis.com/gomechanic_assets/cities/Agra.png",
        title: "Agra",
      },
      {
        id: 1,
        img: "https://storage.googleapis.com/gomechanic_assets/cities/Meerut.png",
        title: "Meerut",
      },
      {
        id: 1,
        img: "https://storage.googleapis.com/gomechanic_assets/cities/Ludhiana.png",
        title: "Ludhiana",
      },
      {
        id: 1,
        img: "https://storage.googleapis.com/gomechanic_assets/cities/Bhopal.png",
        title: "Bhopal",
      },
      {
        id: 1,
        img: "https://storage.googleapis.com/gomechanic_assets/cities/Visakhapatnam.png",
        title: "Visakhapatnam",
      },
    ],
  },
};

async function getData(setlabel, setloading, setitems) {
  await apiInitGet();
  setitems(dev_dome_data);
  setloading(false);
}

export { getData };
