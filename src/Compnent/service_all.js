const items = [
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Basic%20Service%20Package%20sq.jpg",
    title: "Basic Service",
    time: "4 Hrs Taken",
    sub_title: [
      "1000 Kms or 1 Month Warranty",
      "Every 5000 Kms or 3 Months (Recommended)",
    ],
    data: [
      "Engine Oil Replacement",
      "Oil Filter Replacement",
      "Air Filter Cleaning",
      "Coolant Top up",
      "Wiper Fluid Replacement",
      "+ 4 more View All",
    ],
  },

  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Standard%20Service%20Package%20sq.jpg",
    title: "Standard Service",
    time: "6 Hrs Taken",
    sub_title: [
      "1000 Kms or 1 Month Warranty",
      "Every 10,000 Kms or 6 Months (Recommended)",
    ],
    data: [
      "Engine Oil Replacement",
      "Oil Filter Replacement",
      "Air Filter Replacement",
      "Fuel Filter Checking",
      "Cabin Filter / AC Filter Cleaning",
      "+ 10 more View All",
    ],
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Comprehensive%20Service%20Package%202%20sq.jpg",
    title: "Comprehensive Service",
    time: "8 Hrs Taken",
    sub_title: [
      "1000 Kms or 1 Month Warranty",
      "Every 20,000 Kms or 12 Months (Recommended)",
    ],
    data: [
      "Engine Oil Replacement",
      "Oil Filter Replacement",
      "Air Filter Replacement",
      "Fuel Filter Replacement",
      "Cabin Filter / AC Filter Cleaning",
      "+ 15 more View All",
    ],
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Basic%20Service%20Package%20sq.jpg",
    title: "Basic Service",
    time: "4 Hrs Taken",
    sub_title: [
      "1000 Kms or 1 Month Warranty",
      "Every 5000 Kms or 3 Months (Recommended)",
    ],
    data: [
      "Engine Oil Replacement",
      "Oil Filter Replacement",
      "Air Filter Cleaning",
      "Coolant Top up",
      "Wiper Fluid Replacement",
      "+ 4 more View All",
    ],
  },

  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Standard%20Service%20Package%20sq.jpg",
    title: "Standard Service",
    time: "6 Hrs Taken",
    sub_title: [
      "1000 Kms or 1 Month Warranty",
      "Every 10,000 Kms or 6 Months (Recommended)",
    ],
    data: [
      "Engine Oil Replacement",
      "Oil Filter Replacement",
      "Air Filter Replacement",
      "Fuel Filter Checking",
      "Cabin Filter / AC Filter Cleaning",
      "+ 10 more View All",
    ],
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Comprehensive%20Service%20Package%202%20sq.jpg",
    title: "Comprehensive Service",
    time: "8 Hrs Taken",
    sub_title: [
      "1000 Kms or 1 Month Warranty",
      "Every 20,000 Kms or 12 Months (Recommended)",
    ],
    data: [
      "Engine Oil Replacement",
      "Oil Filter Replacement",
      "Air Filter Replacement",
      "Fuel Filter Replacement",
      "Cabin Filter / AC Filter Cleaning",
      "+ 15 more View All",
    ],
  },
];

export default function ServiceAll({ location }) {
  return (
    <div className="service_body">
      <div className="service_title">{location}</div>

      {items.map((item) => (
        <div className="service_each_area">
          <img className="service_each_img" src={item.img} alt="img" />
          <div style={{ width: "100%", paddingLeft: 20 }}>
            <div className="service_each_title_bar">
              <div className="service_each_title">{item.title}</div>
              <div className="service_each_time">
                <div className="service_each_time_icon" />
                {item.time}
              </div>
            </div>
            <div className="service_each_subtitle">
              • {item.sub_title[0]}&nbsp;&nbsp;&nbsp; • {item.sub_title[1]}
            </div>
            <div className="service_each_data">
              {item.data.map((it) => (
                <div style={{ width: "50%", padding: "5px 0px" }}>
                  <img
                    style={{ marginRight: 7 }}
                    alt="img"
                    src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/Services/B267FE43-1120-4815-B81E-6C2AE1EFC4C1.svg"
                  />
                  {it}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "end" }}>
              <div className="service_select">SELECT CAR</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
