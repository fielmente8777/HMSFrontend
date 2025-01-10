import React, { useContext } from "react";
import Heading from "../textcomponents/Heading";
import DataContext from "../../context/DataContext";

const HousekeepingCard = ({ heading, title, src }) => {
  const {
    setShowCart,
    selectServices,
    HousekeepingAssistance,
    setRequestPopup,
    selectRequestPopupData,
  } = useContext(DataContext);

  const handleSelectedServices = (heading, title) => {
    if (title === "In-Room Dining" || title === "Buffet") {
      const service = HousekeepingAssistance.find(
        (service) =>
          service.subtitle === heading &&
          service.items.some((item) => item.title === title)
      );

      console.log(service);

      if (service) {
        if (service.items[0].title === title) {
          selectServices(service.items[0]);
          console.log(service.items[0].title);
          setShowCart(true);
        } else if (service.items[1].title === title) {
          selectRequestPopupData(service.items[1].title);
          setRequestPopup(true);
          setShowCart(false);
        }
      }
    } else {
      const service = HousekeepingAssistance.find(
        (service) => service.subtitle === heading
      );
      if (service) {
        selectServices(service);
      }
      setShowCart(true);
    }

    // setShowCart((prevShowCart) => !prevShowCart);
  };

  return (
    <div
      className="flex flex-col items-center gap-1 w-[5rem] aspect-square"
      // onClick={() => handleSelectedServices(heading)}
    >
      <div
        onClick={() => handleSelectedServices(heading, title)}
        className="relative w-full aspect-square bg-tertiary rounded-xl"
      >
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
