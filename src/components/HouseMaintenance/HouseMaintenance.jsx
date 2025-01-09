import React, { useContext } from "react";
import Heading from "../textcomponents/Heading";
import CardContainer from "../slider/CardContainer";
import DataContext from "../../context/DataContext";


const HouseMaintenance = () => {
  const { HousekeepingAssistance } = useContext(DataContext);
  return (
    <section className="flex flex-col gap-4">
      <Heading h2={true} className="text-base ">
        {HousekeepingAssistance[3].title}
      </Heading>
      <Heading h3={true} className="text-sm text-secondary">
        {HousekeepingAssistance[2].subtitle}
      </Heading>
      <CardContainer data={HousekeepingAssistance[2].items} heading={HousekeepingAssistance[2].subtitle} />
      <Heading h3={true} className="text-sm text-secondary mt-2">
        {HousekeepingAssistance[3].subtitle}
      </Heading>
      <CardContainer data={HousekeepingAssistance[3].items} heading={HousekeepingAssistance[3].subtitle} />
    </section>
  );
};

export default HouseMaintenance;
