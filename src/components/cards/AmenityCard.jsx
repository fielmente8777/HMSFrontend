import React, { useContext } from "react";
import DataContext from "../../context/DataContext";

const AmenityCard = ({ icon, title }) => {
  const { setShowPopupSuppert, selectEmergencyServices, amenities } =
    useContext(DataContext);
  const handleSelectedServices = (heading) => {

    const service = amenities.find((service) => service.title === heading);

    if (service) {
      selectEmergencyServices(service);
    }
    setShowPopupSuppert(true);
  };
  return (
    <div
      className="flex flex-col items-center py-4 px-3 gap-2 bg-[#F4F0F0] rounded-xl"
      onClick={() => handleSelectedServices(title)}
    >
      <span>{icon}</span>
      <span className="font-medium text-[0.78rem] capitalize text-[#121212]">
        {title}
      </span>
    </div>
  );
};

export default AmenityCard;
