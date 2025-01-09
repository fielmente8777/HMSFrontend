import React, { useContext } from "react";
import Heading from "../textcomponents/Heading";
import DataContext from "../../context/DataContext";

const HousekeepingCard = ({ heading, title, src }) => {

  const { showCart, setShowCart, selectServices, HousekeepingAssistance } = useContext(DataContext);

  const handleSelectedServices = (heading) => {
    if (heading === HousekeepingAssistance[0].subtitle) {
      selectServices(HousekeepingAssistance[0]);
    }
    else if (heading === HousekeepingAssistance[1].subtitle) {
      selectServices(HousekeepingAssistance[1]);
    }
    else if (heading === HousekeepingAssistance[2].subtitle) {
      selectServices(HousekeepingAssistance[2]);
    }
    else if (heading === HousekeepingAssistance[3].subtitle) {
      selectServices(HousekeepingAssistance[3]);
    }
    setShowCart(!showCart)
  }

  return (
    <div
      className="flex flex-col items-center gap-1 w-[5rem] aspect-square"
      onClick={() => handleSelectedServices(heading)}
    >
      <div className="relative w-full aspect-square bg-tertiary rounded-xl">
        <img
          src={src}
          alt={title}
          className="object-contain px-2 w-full h-full absolute top-0 left-0"
        />
      </div>
      <Heading
        h3
        className="text-[#272727] text-center text-[0.79rem] font-medium"
      >
        {title}
      </Heading>
    </div>
  );
};

export default HousekeepingCard;
