import React from "react";
import Heading from "../textcomponents/Heading";
import CardContainer from "../slider/CardContainer";
import TapLeakage from "../../images/TapLeakage.png";
import Drainage from "../../images/Drainage.png";
import PowerOutages from "../../images/PowerOutages.png";
import FaultySwitches from "../../images/FaultySwitches.png";
import FaultyAppliance from "../../images/FaultyAppliance.png";

const HouseMaintenance = ({ setShowCart, showCart }) => {
  const plumbing = [
    {
      src: TapLeakage,
      title: "Tap Leakage",
    },
    {
      src: Drainage,
      title: "Drainage",
    },
  ];
  const electricity = [
    {
      src: PowerOutages,
      title: "Power Outages",
    },
    {
      src: FaultySwitches,
      title: "Faulty Switches",
    },
    {
      src: FaultyAppliance,
      title: "Faulty Appliance",
    },
  ];
  return (
    <section className="flex flex-col gap-4">
      <Heading h2={true} className="text-base ">
        House Maintenance
      </Heading>
      <Heading h3={true} className="text-sm text-secondary">
        PLUMBING
      </Heading>
      <CardContainer data={plumbing} setShowCart={setShowCart} showCart={showCart} />
      <Heading h3={true} className="text-sm text-secondary mt-2">
        Electricity
      </Heading>
      <CardContainer data={electricity} setShowCart={setShowCart} showCart={showCart} />
    </section>
  );
};

export default HouseMaintenance;
