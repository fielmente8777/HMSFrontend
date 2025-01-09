import React, { useContext } from "react";
import HousekeepingSlider from "../slider/HousekeepingSlider";
import Heading from "../textcomponents/Heading";
import CardContainer from "../slider/CardContainer";

import DataContext from "../../context/DataContext";
const HousekeepingAssistance = () => {

  const { HousekeepingAssistance } = useContext(DataContext);



  return (
    <div className="flex flex-col gap-4">
      <Heading
        h2={true}
        className="text-base ">
        Housekeeping Assistance
      </Heading>
      <Heading h3={true} className="text-sm text-secondary">
        {HousekeepingAssistance[0].title}
      </Heading>
      <CardContainer data={HousekeepingAssistance[0].items} heading={HousekeepingAssistance[0].title} />

      <Heading h3={true} className="text-sm text-secondary mt-2">
        {HousekeepingAssistance[1].title}
      </Heading>
      <CardContainer data={HousekeepingAssistance[1].items} heading={HousekeepingAssistance[1].title} />
    </div>
  );
};

export default HousekeepingAssistance;
