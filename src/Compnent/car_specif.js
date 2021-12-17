import React from "react";

const items = [
  { title: "Price", disc: "₹ 11.99 Lakh onwards" },
  { title: "Transmission", disc: "Automatic" },
  { title: "Fuel Type", disc: "Electric" },
  { title: "Seating Capacity", disc: "5 Seater" },
];

function CarSpecification() {
  return (
    <React.StrictMode>
      <div className="cr_1e">Maruthi Suzuki Swift Key Specifications</div>
      <div className="cr_sp_b">
        {items.map((item) => (
          <div className="cr_sp_c">
            <div className="cr_sp_d">{item.title}</div>
            <div className="cr_sp_e">{item.disc}</div>
          </div>
        ))}
      </div>
    </React.StrictMode>
  );
}

export default CarSpecification;
