import React, { useContext, useEffect, useState } from "react";
import bannerImg from "../images/erabanner2.webp";
import { EmergencyIcon, SearchIcon, WifiIcon } from "../utils/icon";
import AmenityCard from "../components/cards/AmenityCard";
import HousekeepingSlider from "../components/slider/HousekeepingSlider";
import { Link } from "react-router-dom";
import HousekeepingAssistance from "../components/HousekeepingAssistance/HousekeepingAssistance";
import HouseMaintenance from "../components/HouseMaintenance/HouseMaintenance";
import Popupcart from "../components/Popupcart";
import DataContext from "../context/DataContext";
import ContactSupportPopup from "../components/PopupComponents/ContactSupportPopup";
const Home = () => {

  const { showCart, setShowCart, auth, setAuth, requestPopup, setRequestPopup } = useContext(DataContext);
  const amenitys = [
    {
      icon: <WifiIcon />,
      title: "Wifi assistance",
    },
    {
      icon: <EmergencyIcon />,
      title: "Emergency",
    },
  ];

  const [roomData, setRoomData] = useState(
    JSON.parse(localStorage.getItem("roomsData"))
  );

  useEffect(() => {
    setRoomData(JSON.parse(localStorage.getItem("roomsData")));
  }, []);

  return (
    <div className={`w-full ${showCart && "relative"}`}>
      <div
        className="relative w-full aspect-[4/2.9] -z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={bannerImg}
          alt="banner"
          className="object-cover w-full h-full absolute top-0 left-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))]">
          <div className="flex flex-col gap-2 justify-end py-16 text-white h-full px-5">
            <h1 className="text-xl font-semibold capitalize">
              Hey {localStorage.getItem('guestName')}
            </h1>
            <p className="capitalize">
              Room Id : {roomData?.roomId}, {roomData?.roomType}
            </p>
            <p className="text-base capitalize"></p>
            <p className="text-base">Welcome to Era Camps</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-5 p-5 rounded-tr-3xl rounded-tl-3xl -mt-10 bg-white">
        {/* <div className="flex w-full flex-col gap-5 p-5 rounded-tr-3xl rounded-tl-3xl relative bg-white z-10 -top-10"> */}
        <div className="flex justify-between items-center gap-1 border border-[#B2B2B2] rounded-full p-2">
          <button>
            <SearchIcon />
          </button>
          <input
            type="text"
            className="w-full outline-none"
            placeholder="Search Services"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {amenitys.map((item, index) => (
            <AmenityCard
              {...item}
              key={index}
              showCart={showCart}
              setShowCart={setShowCart}
            />
          ))}
        </div>
        <HousekeepingAssistance setShowCart={setShowCart} showCart={showCart} />
        <HouseMaintenance setShowCart={setShowCart} showCart={showCart} />
      </div>
      <div
        className={`box-shadow flex flex-col gap-5 p-5 rounded-tr-3xl rounded-tl-3xl mt-2 bg-white ${showCart ? "fixed bottom-0 left-0 w-full h-[75vh] z-50" : ""}`}
      >
        <Popupcart />
      </div>

      {requestPopup && <ContactSupportPopup />}

    </div>
  );
};

export default Home;
