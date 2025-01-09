import React from "react";
import HousekeepingSlider from "../slider/HousekeepingSlider";
import Heading from "../textcomponents/Heading";
import Pillows from "../../images/Pillows.webp";
import Blankets from "../../images/Blankets.webp";
import CardContainer from "../slider/CardContainer";
import Towels from "../../images/Towels.webp";
import Toiletries from "../../images/Toiletries.webp";
import RoomCleaning from "../../images/RoomCleaning.png";
import BathroomCleaning from "../../images/BathroomCleaning.png";
const HousekeepingAssistance = ({ setShowCart, showCart }) => {
  const Amenities = [
    {
      src: Pillows,
      title: "Pillows",
    },
    {
      src: Blankets,
      title: "Blankets",
    },
    {
      src: Towels,
      title: "Towels",
    },
    {
      src: Toiletries,
      title: "Toiletries",
    },
  ];
  const RoomBathroom = [
    {
      src: RoomCleaning,
      title: "Room Cleaning",
    },
    {
      src: BathroomCleaning,
      title: "Bathroom Cleaning",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Heading
        h2={true}
        className="text-base "
        
      >
        Housekeeping Assistance
      </Heading>
      <Heading h3={true} className="text-sm text-secondary">
        Amenities
      </Heading>

      {/* <HousekeepingSlider /> */}
      <CardContainer data={Amenities} setShowCart={setShowCart} showCart={showCart} />
      <Heading h3={true} className="text-sm text-secondary mt-2">
        Room & Bathroom
      </Heading>
      <CardContainer data={RoomBathroom} setShowCart={setShowCart} showCart={showCart}/>
    </div>
  );
};

export default HousekeepingAssistance;
