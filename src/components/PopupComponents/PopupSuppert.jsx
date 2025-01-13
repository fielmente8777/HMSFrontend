import React, { useContext, useEffect, useState } from "react";
import Heading from "../textcomponents/Heading";
import DataContext from "../../context/DataContext";
import Para from "../textcomponents/Para";
import { LocateMeIcon } from "../../utils/icon";
import axios from 'axios'
import Loader from "../Loader";

const PopupSuppert = () => {
  const {
    showPopupSuppert,
    setShowPopupSuppert,
    services,
    emergencyServices,
    setRequestPopup,
    selectRequestPopupData,
    error, setError
  } = useContext(DataContext);


  useEffect(() => {
    if (!showPopupSuppert) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopupSuppert]);

  const handileCancel = () => {
    setShowPopupSuppert(false);
  };
  const [load, setLoad] = useState(null);

  const handleLocationRequest = async (googlemapurl) => {
    try {
      const data = JSON.parse(localStorage.getItem("roomsData"));
      const result = await axios.post('https://hmsbackend-7pyp.onrender.com/api/emergencylocationshared', {
        ndid: localStorage.getItem("hotelid"),
        hid: localStorage.getItem("hid"),
        guestName: localStorage.getItem("guestName"),
        guestPhoneNumber: localStorage.getItem("guestNumber"),
        roomNumber: data?.roomId,
        roomType: data?.roomType,
        request: googlemapurl
      })

      const response = result.data;
      if (response) {
        return response;
      };
    } catch (error) {
      console.error(error);
    }
  }
  const handleLocateMe = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

          setError(null);
          handleLocationRequest(googleMapsUrl).then((result) => {
            if (result.status === true) {
              setLoad(false)
              selectRequestPopupData(result.message);
              setRequestPopup(true);
              setShowPopupSuppert(false);
            }
          });
        },
        (err) => {
          setLoad(false)
          setError(err.message);
          setLocationUrl(null);
        }
      );
    } else {
      setLoad(false)
      setError("Geolocation is not supported by your browser.");
    }
  }

  const handlePopoup = async (title) => {
    if (title === "Location shared successfully") {
      setLoad(true);
      handleLocateMe();
    }
    else {
      selectRequestPopupData(title);
      setRequestPopup(true);
      setShowPopupSuppert(false);
    }

  };

  let serviceData = null;
  let foodData = null;
  if (services?.title === "In-Room Dining") {
    foodData = services;
  } else {
    serviceData = services;
  }
  const hight =
    serviceData?.items.length >= 3
      ? "36%"
      : serviceData?.items.length + 4 + "0%";

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${showPopupSuppert
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
        }`}
    // onClick={(e) => {
    //   e.stopPropagation(); // Prevent the click from bubbling up
    //   setShowPopupSuppert(false); // Close the popup on overlay click
    // }}
    >
      <div
        className={`box-shadow transform transition-all duration-500 ease-in-out ${showPopupSuppert
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
          } fixed bottom-0 left-0 w-full p-5 rounded-tr-3xl z-30 rounded-tl-3xl mt-2 bg-white`}
        style={{ height: "auto" }}
      >
        <div
          className="w-10 bg-[#DADADA] h-1 mx-auto mb-4 cursor-pointer"
          onClick={() => setShowPopupSuppert(false)}
        />
        <div className="overflow-y-scroll h-full">
          {emergencyServices && (
            <div className="flex flex-col gap-4 pb-4">
              <Heading h3 className="text-primary font-medium text-base">
                {emergencyServices?.title}
              </Heading>
              {emergencyServices?.src && (
                <div className="flex items-center justify-center w-full">
                  <div className="w-full aspect-[4/2.2] relative">
                    <img
                      src={emergencyServices?.src}
                      alt={emergencyServices?.title}
                      className="object-cover w-full h-full absolute top-0 left-0"
                    />
                  </div>
                </div>
              )}
              {emergencyServices?.subtitle && (
                <Heading h3 className="text-primary font-medium text-base">
                  {emergencyServices?.subtitle}
                </Heading>
              )}
              <Para className="text-secondary text-sm">
                {emergencyServices?.description}
              </Para>
              <div className="w-full flex flex-col gap-4 mt-5">
                <button
                  onClick={() => handlePopoup(emergencyServices?.popupTitle)}
                  className="bg-[#FF432A] flex gap-2 items-center font-semibold justify-center text-sm text-white py-3 px-4 uppercase tracking-wider rounded-full"
                >
                  {emergencyServices?.popupTitle ===
                    "Location shared successfully" ? (
                    <p className="flex gap-2 items-center">
                      {load ? <Loader /> : <><LocateMeIcon /> Locate Me</>}
                    </p>
                  ) : (
                    "Contact IT Support"
                  )}
                </button>
                <button
                  className="border flex items-center uppercase justify-center border-[#FF432A] text-sm font-semibold py-3 w-full rounded-full text-[#FF432A]"
                  onClick={handileCancel}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupSuppert;
