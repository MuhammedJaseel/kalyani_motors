import React from "react";

const items = [
  {
    title: "Variants",
    disc: "The variants of the Tata Tigor EV include XE, XM, and XZ+.",
  },
  {
    title: "Market Introduction",
    disc: "Tata Motors launched the Tigor EV in India on 31 August, 2021. It is the most affordable electric vehicle in the carmaker’s lineup.",
  },
  {
    title: "Technical Specifications",
    disc: "Utilising the brand’s Ziptron technology, the Tigor EV draws its power from a 26kWh lithium-ion battery pack. The electric sedan has an output of 74bhp and 170Nm of torque with a zero to 60kmph acceleration time of 5.7 seconds. It also supports CCS2 charging with support for fast charge as well as from any 15A plug point. When connected to a fast charger, the battery can be topped up from zero to 80 per cent in about 65 minutes. Tata Motors also claims an ARAI certified range of 306km. The Tigor EV measures 3,993mm in length, is 1,532mm tall and 1,677mm wide, and boasts 2,450mm of wheelbase.",
  },
  {
    title: "Exterior and Design",
    disc: "Visually, the Tigor EV resembles its ICE brother. However, select styling highlights like blue accents on the blanked-out front grille with a tri-arrow pattern, bumper-mounted LED DRLs, and 14-inch hyperstyle wheels are unique to this EV. ",
  },
  {
    title: "Interior and Features",
    disc: "The cabin follows a dual black and white theme with blue inserts around the aircon vents. Besides this, it is loaded with features such as a seven-inch Harman touchscreen infotainment system with four speakers and four tweeters, a rear parking camera, electric boot unlock, cooled glovebox, auto-folding ORVMs, and height adjustment for the driver seat. ",
  },
  {
    title: "Colours",
    disc: "There are two exterior shades to choose from – Daytona Grey and Teal Blue. Both the hues can be had with a black roof.",
  },
  {
    title: "Seating Capacity",
    disc: "The Tata Tigor EV has a seating layout to accommodate five occupants.",
  },
  {
    title: "Rivals",
    disc: "There are no direct rivals to the Tigor EV in the budget electric vehicle segment. However, it undercuts its elder sibling, the Nexon EV by Rs2 lakh.",
  },
];

function CarSummary() {
  return (
    <React.StrictMode>
      <div className="cr_1e">Maruthi Suzuki Swift Key Specifications</div>
      <div className="cr_sm_b">
        {items.map((item) => (
          <>
            <div className="cr_sm_d">{item.title}</div>
            <div className="cr_sm_e">{item.disc}</div>
          </>
        ))}
      </div>
    </React.StrictMode>
  );
}

export default CarSummary;
