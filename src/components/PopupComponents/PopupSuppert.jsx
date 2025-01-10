import React, { useContext, useEffect } from "react";
import Heading from "../textcomponents/Heading";
import DataContext from "../../context/DataContext";
import Para from "../textcomponents/Para";
import { LocateMeIcon } from "../../utils/icon";

const PopupSuppert = () => {
  const {
    showPopupSuppert,
    setShowPopupSuppert,
    services,
    emergencyServices,
    setRequestPopup,
    selectRequestPopupData,
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


  const handleLocateMe = async () => {
    return true;
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     async (position) => {
    //       const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;
    //       try {
    //         const result = await axios.get(url);
    //         console.log(result.data)
    //         setLocation((prevLocation) => ({
    //           ...prevLocation,
    //           locality: result.data.locality,
    //           city: result.data.city,
    //           countryCode: result.data.countryCode,
    //           country: result.data.countryName,
    //           state: result.data.principalSubdivision,
    //         }));

    //         const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=28.4196864,77.0310144`;
    //         setGoogleMap(googleMapsUrl)

    //       } catch (err) {
    //         console.error(err);
    //       }
    //     },
    //     (error) => {
    //       console.error(error)
    //     }
    //   );


    //   console.log("Google Maps URL:", googleMap);
    // } else {
    //   console.error("Geolocation is not supported by this browser.")
    // }
  };


  const handlePopoup = (title) => {

    if (title === "Location shared succesfully") {
      handleLocateMe();
    }
    selectRequestPopupData(title);
    setRequestPopup(true);
    setShowPopupSuppert(false);
  };

  let serviceData = null;
  let foodData = null;
  if (services?.title === "In-Room Dining") {

    foodData = services;
  }
  else {
    serviceData = services;
  }
  const hight =
    serviceData?.items.length >= 3 ? "36%" : serviceData?.items.length + 4 + "0%";

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-50 ${showPopupSuppert ? "block" : "hidden"
        }`}
    >
      <div
        className={`transition-transform duration-700 ease-linear transform ${showPopupSuppert ? "translate-y-0" : "translate-y-full"
          }  fixed bottom-0  left-0 w-full p-5 rounded-tr-3xl z-30 rounded-tl-3xl mt-2 bg-white`}
        style={{ height: "auto" }}
      >
        <div
          className="w-10 bg-[#DADADA] h-1 mx-auto mb-4"
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
                  {emergencyServices?.popupTitle === "Location shared succesfully" ?
                    // < className="flex gap-4 items-center text-sm">
                    (<><LocateMeIcon /> Locate Me</>)
                    // </>
                    : "Contact IT Support"}
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
