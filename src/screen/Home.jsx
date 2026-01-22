import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import bannerImg from "../images/erabanner2.webp";
// import { EmergencyIcon, SearchIcon, WifiIcon } from "../utils/icon";
// import AmenityCard from "../components/cards/AmenityCard";
import Footer from "../components/Footer/Footer";
import Loaderone from "../components/Loaderone";
import ProfileMain from "../components/Myprofile/ProfileMain";
import Popupcart from "../components/PopupComponents/Popupcart";
import PopupSuppert from "../components/PopupComponents/PopupSuppert";
import RequestRaisedPopup from "../components/PopupComponents/RequestRaisedPopup";
import CommonServiceCard from "../components/ServiceCard/CommonServiceCard";
import CommonServiceCard1 from "../components/ServiceCard/CommonServiceCard1";
import DataContext from "../context/DataContext";
const Home = () => {
  const {
    // showCart,
    // reservationId,
    loading,
    // setLoading,
    getClientEngineData,
    hotelDetails,
    clientWebsiteData,
  } = useContext(DataContext);
  const [roomData, setRoomData] = useState();
  const [activeTab, setActiveTab] = useState("Explore");

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.search);

  const checkAndClearLocalStorage = () => {
    const lastClearTime = localStorage.getItem("lastClearTime");
    const currentTime = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (!lastClearTime || currentTime - lastClearTime > oneDay) {
      localStorage.clear();
      localStorage.setItem("lastClearTime", currentTime); // Update the timestamp after clearing
    } else {
      console.log("Local storage is within the 24-hour limit.");
    }
  };

  useEffect(() => {
    checkAndClearLocalStorage();

    const params = new URLSearchParams(location.search);

    const ndid = params.get("id");
    const hid = params.get("hid");
    const reservationid = params.get("reservationid");

    localStorage.setItem("hotelid", ndid);
    localStorage.setItem("hid", hid);

    const storedNdid = localStorage.getItem("hotelid");
    const storedHid = localStorage.getItem("hid");
    const storedReservationid = JSON.parse(localStorage.getItem("roomsData"));

    if (!localStorage.getItem("roomsData")) {
      navigate("/login");
    } else if (
      !ndid ||
      !hid ||
      !reservationid ||
      ndid !== storedNdid ||
      hid !== storedHid ||
      reservationid !== storedReservationid?.roomId
    ) {
      // navigate("/not-found");
    }
    setRoomData(JSON.parse(localStorage.getItem("roomsData")));
    getClientEngineData();
  });

  const handleActiveTab = (title) => {
    setActiveTab(title);
  };

  return (
    <div className={`w-full`}>
      {!loading ? (
        <>
          <div className="relative w-full aspect-[4/2.9] -z-10 bg-white">
            {clientWebsiteData?.Images?.[0]?.Image && (
              <>
                <img
                  src={clientWebsiteData?.Images[0]?.Image}
                  alt="banner"
                  className="object-cover w-full h-full absolute top-0 left-0"
                />
                <img
                  src={hotelDetails?.Footer?.Logo}
                  alt="banner"
                  className="object-cover w-20 bg-white h-20 absolute top-0 left-[50%] bg-transparent"
                  style={{
                    transform: "translate(-50%)",
                  }}
                />
              </>
            )}
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))]">
              <div className="flex flex-col gap-2 justify-end py-16 text-white h-full px-5">
                <h1 className="text-xl font-semibold capitalize">
                  Hey {localStorage.getItem("guestName")}
                </h1>
                <p className="capitalize">
                  Room Id : {roomData?.roomId}, {roomData?.roomType}
                </p>
                <p className="text-base capitalize"></p>
                <p className="text-base capitalize">
                  Welcome to {hotelDetails?.HotelName}
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-5 p-5 rounded-tr-3xl rounded-tl-3xl -mt-10 bg-white">
            {/* <div className="flex justify-between items-center gap-1 border border-[#B2B2B2] rounded-full p-2">
              <button>
                <SearchIcon />
              </button>
              <input
                type="text"
                className="w-full outline-none"
                placeholder="Search Services"
              />
            </div> */}
            <div className="flex justify-between text-[0.78rem] rounded-full bg-[#F4F0F0]">
              <span
                onClick={() => handleActiveTab("Explore")}
                className={`${
                  activeTab === "Explore" ? "bg-[#FF432A] text-white" : ""
                } font-medium py-2 rounded-full w-full px-1 flex justify-center items-center`}
              >
                Explore
              </span>
              <span
                onClick={() => handleActiveTab("My Profile")}
                className={`${
                  activeTab === "My Profile" ? "bg-[#FF432A] text-white" : ""
                } font-medium py-2 rounded-full w-full px-1 flex justify-center items-center`}
              >
                My Profile
              </span>
            </div>
            {activeTab === "Explore" ? (
              <>
                <CommonServiceCard />
                <CommonServiceCard1 />
              </>
            ) : (
              <div className="">
                <ProfileMain />
              </div>
            )}
          </div>

          <Popupcart />
          <PopupSuppert />
          <RequestRaisedPopup />
          <Footer />
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <Loaderone />
        </div>
      )}
    </div>
  );
};

export default Home;
