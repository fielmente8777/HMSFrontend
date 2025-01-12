import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import { RequestAPI } from "../../api/Request";

const AmenityCard = ({ icon, title }) => {
  const { setShowPopupSuppert, selectEmergencyServices, setCounter, setError, setShowCart, setSpecialRequest, setRequestPopup, amenities, selectRequestPopupData } =
    useContext(DataContext);
  const handleSelectedServices = (heading) => {
    const service = amenities.find((service) => service.title === heading);

    if (service) {
      selectEmergencyServices(service);
    }


    if (heading === "Luggage assistance") {
      const handleRequest = async (title) => {
        try {
          const data = JSON.parse(localStorage.getItem("roomsData"));
          const body = {
            ndid: localStorage.getItem("hotelid"),
            hid: localStorage.getItem("hid"),
            guestName: localStorage.getItem("guestName"),
            guestPhoneNumber: localStorage.getItem("guestNumber"),
            roomNumber: data?.roomId,
            requestedItems: [{
              item: "Luggage",
              quantity: 1,
            }],
            specialRequest: "Help to pick up my luggage",
          };

          const response = await RequestAPI(body);

          if (response) {
            setRequestPopup(true);
            selectRequestPopupData(title ? title : "Request raised");
            setShowCart(false);
            setCounter([]);
            setSpecialRequest("");
          }
        } catch (err) {
          setError(err.message || "Something went wrong!");
        }
      };
      handleRequest()
    }
    else if (heading === "Medical assistance") {
      selectRequestPopupData(heading);
      setRequestPopup(true);
    }
    else {
      setShowPopupSuppert(true);
    }



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
