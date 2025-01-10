import React, { useContext, useEffect, useState } from "react";
import bannerImg from "../images/erabanner2.webp";
import { EmergencyIcon, SearchIcon, WifiIcon } from "../utils/icon";
import AmenityCard from "../components/cards/AmenityCard";
import Popupcart from "../components/PopupComponents/Popupcart";
import DataContext from "../context/DataContext";
import RequestRaisedPopup from "../components/PopupComponents/RequestRaisedPopup";
import Footer from "../components/Footer/Footer";
import CommonServiceCard1 from "../components/ServiceCard/CommonServiceCard1";
import CommonServiceCard from "../components/ServiceCard/CommonServiceCard";
const Home = () => {
  const { showCart } = useContext(DataContext);
 

  const [roomData, setRoomData] = useState(
    JSON.parse(localStorage.getItem("roomsData"))
  );

  useEffect(() => {
    setRoomData(JSON.parse(localStorage.getItem("roomsData")));
  }, []);

  return (
    <div className={`w-full`}>
      <div
        className="relative w-full aspect-[4/2.9] -z-10"
      >
        <img
          src={bannerImg}
          alt="banner"
          className="object-cover w-full h-full absolute top-0 left-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))]">
          <div className="flex flex-col gap-2 justify-end py-16 text-white h-full px-5">
            <h1 className="text-xl font-semibold capitalize">
              Hey {localStorage.getItem("guestName")}
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

        <CommonServiceCard />
        <CommonServiceCard1 />
      </div>

      <Popupcart />

      <RequestRaisedPopup />
      <Footer />
    </div>
  );
};

export default Home;
