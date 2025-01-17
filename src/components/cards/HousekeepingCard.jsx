import React, { useContext } from "react";
import Heading from "../textcomponents/Heading";
import DataContext from "../../context/DataContext";
import { RequestAPI } from "../../api/Request";

const HousekeepingCard = ({ heading, title, src }) => {

  const {
    setShowCart,
    selectServices,
    HousekeepingAssistance,
    setRequestPopup,
    selectRequestPopupData,
    setCounter,
    setError,
    specialRequest, setSpecialRequest
  } = useContext(DataContext);

  // const handleBuffet = async (title) => {
  //   try {
  //     const data = JSON.parse(localStorage.getItem("roomsData"));
  //     const body = {
  //       ndid: localStorage.getItem("hotelid"),
  //       hid: localStorage.getItem("hid"),
  //       guestName: localStorage.getItem("guestName"),
  //       guestPhoneNumber: localStorage.getItem("guestNumber"),
  //       roomNumber: data?.roomId,
  //       requestedItems: [{
  //         item: title,
  //         quantity: 1,
  //       }],
  //       specialRequest: specialRequest,
  //     };

  //     const response = await RequestAPI(body);
  //     return response;
  //   } catch (err) {
  //     setError(err.message || "Something went wrong!");
  //   }
  // }


  const handleSelectedServices = (heading, title) => {
    if (title === "In-Room Dining" || title === "Buffet") {
      const service = HousekeepingAssistance.find(
        (service) =>
          service.subtitle === heading &&
          service.items.some((item) => item.title === title)
      );


      if (service) {
        if (service.items[0].title === title) {

          // uncomment the following line if room dining is available
          // selectServices(service.items[0]);
          // setShowCart(true);

          // if room dining is available then remove following statement
          selectRequestPopupData("Call Receptionist");
          setRequestPopup(true);
          setShowCart(false);
          // till here


        }

        // if room dining is available then uncomment the else statement

        // else if (service.items[1].title === title) {
        // const result = handleBuffet(title)
        // if (result) {
        // selectRequestPopupData("Call Receptionist");
        // setRequestPopup(true);
        // setShowCart(false);
        // }
        // }
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

  };

  return (
    <div
      className="flex flex-col items-center gap-1 w-[5rem] aspect-square"
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
