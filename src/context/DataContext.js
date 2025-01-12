import { createContext, useEffect, useState } from "react";
import Pillows from "../images/Pillows.webp";
import Blankets from "../images/Blankets.webp";
import Towels from "../images/Towels.webp";
import Toiletries from "../images/Toiletries.webp";
import RoomCleaning from "../images/RoomCleaning.png";
import BathroomCleaning from "../images/BathroomCleaning.png";
import TapLeakage from "../images/TapLeakage.png";
// import Drainage from "../images/Drainage.png";
import PowerOutages from "../images/PowerOutages.png";
// import FaultySwitches from "../images/FaultySwitches.png";
// import FaultyAppliance from "../images/FaultyAppliance.png";
import HotWater from "../images/HotWater.png";
import Buffet from "../images/Buffet.png";
import InRoomDining from "../images/InRoomDining.png";
import LocateMe from "../images/LocateMe.png";
import {
  EmergencyIcon,
  WifiIcon,
  LuggageAssistance,
  MedicalAssistance,
  ContactitSupport,
  ConfirmIcon,
  BuffetIcon,
} from "../utils/icon";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [auth, setAuth] = useState(true);
  const [hotelDetails, setHotelDetails] = useState(null);
  const [clientWebsiteData, setClientsWebsiteData] = useState({});
  const [coreIds, setCoreIds] = useState({
    hotelId: localStorage.getItem("hid"),
    hotelNdId: localStorage.getItem("hotelid"),
  });

  const baseUrl = "https://nexon.eazotel.com";

  const getClientWebsiteData = async () => {
    const response = await fetch(
      `${baseUrl}/cms/get/website/ndid/${localStorage.getItem("hotelid")}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, /",
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    // const json = await response1.json();
    if (json.Status) {
      setClientsWebsiteData(json.WebsiteData);
    }
  };
  const getClientEngineData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${baseUrl}/booking/getenginedetails/${localStorage.getItem(
          "hotelid"
        )}/${localStorage.getItem("hid")}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json, text/plain, /",
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();

      if (json.Status === true) {
        getClientWebsiteData();
        setHotelDetails(json.Details);
      }
      setLoading(false);
    } catch (error) {
      console.log("Error: " + error);
      setLoading(false);
    }
    setLoading(false);
  };

  // const getId = async () => {
  //   try {
  //     console.log("fhgjkm")
  //     const result = await axios.get("/setId");
  //     const resp = await result

  //     if (resp.Status) {
  //       localStorage.setItem("hotelid", resp.ndid);
  //       localStorage.setItem("hid", resp.hId);
  //     }
  //     const websiteData = await getClientWebsiteData();
  //     setClientsWebsiteData(websiteData)

  //   } catch { }
  // }

  useEffect(() => {
    setHotelDetails("None");

    //Comment these lines if runnning with backend
    // era camps
    localStorage.setItem("hotelid", "f80fb327-020b-4fc7-a085-f2ae10edabe9");
    localStorage.setItem("hid", "11960126");
    // sparv
    // localStorage.setItem("hotelid", "e50d8dc6-4cfc-4c87-b6c0-145ccdeb4121");
    // localStorage.setItem("hid", "56369483");
    getClientEngineData();

    // till here

    //Comment these lines if runnning with frontend
    // getId();
    //till here
  }, []);

  const [reservationId, setReservationId] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [error, setError] = useState("");
  const [bookingData, setBookingData] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showPopupSuppert, setShowPopupSuppert] = useState(false);

  const [services, selectServices] = useState(null);
  const [emergencyServices, selectEmergencyServices] = useState(null);
  const [requestPopupData, selectRequestPopupData] = useState(null);
  const [amenities, setAmenities] = useState([
    {
      icon: <WifiIcon />,
      title: "Wifi assistance",
      popupTitle: "Contact it Support",
      description:
        "Connect to WiFi name “Shivadya Tent City” and enter password “123456”.",
    },
    {
      icon: <EmergencyIcon />,
      title: "Emergency",
      popupTitle: "Location shared succesfully",
      subtitle: "Don’t worry. We are here for you.",
      description:
        "Share your location with us, and our team will call you for immediate assistance",
      src: LocateMe,
    },
    {
      icon: <LuggageAssistance />,
      title: "Luggage assistance",
    },
    {
      icon: <MedicalAssistance />,
      title: "Medical assistance",
    },
  ]);
  const [HousekeepingAssistance, setHouseKeepingAssistance] = useState([
    {
      title: "Housekeeping Assistance",
      subtitle: "Amenities",
      items: [
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
      ],
    },
    {
      title: "Housekeeping Assistance",
      subtitle: "Rooms & Bathrooms",
      items: [
        {
          src: RoomCleaning,
          title: "Room Cleaning",
        },
        {
          src: BathroomCleaning,
          title: "Bathroom Cleaning",
        },
      ],
    },
    {
      title: "Maintenance",
      subtitle: "",
      items: [
        {
          src: TapLeakage,
          title: "Plumbing",
        },
        // {
        //   src: Drainage,
        //   title: "Drainage",
        // },
        {
          src: PowerOutages,
          title: "Electricity",
        },
        {
          src: HotWater,
          title: "Hot Water",
        },
        // {
        //   src: FaultySwitches,
        //   title: "Faulty Switches",
        // },
        // {
        //   src: FaultyAppliance,
        //   title: "Faulty Appliance",
        // },
      ],
    },
    // {
    //   title: "Maintenance",
    //   subtitle: "Electricity",
    //   items: [
    //     {
    //       src: PowerOutages,
    //       title: "Power Outages",
    //     },
    //     {
    //       src: FaultySwitches,
    //       title: "Faulty Switches",
    //     },
    //     {
    //       src: FaultyAppliance,
    //       title: "Faulty Appliance",
    //     },
    //   ],
    // },
    {
      title: "Luxury Tents",
      subtitle: "",
      items: [
        {
          src: InRoomDining,
          title: "In-Room Dining",
          option: [
            {
              title: "soup",
              food: ["Roasted Tomato & Basil", "Hot & Sour Veg"],
            },
            {
              title: "munches",
              food: [
                "Peri Peri Fries",
                "Veg. Coleslaw Sandwich",
                "Cajun Potato Wedges",
                "Dal Tadka",
                "Paneer Lababdaar",
                "Steamed Rice",
                "Peas Pulao",
                "Tandoori Roti",
              ],
            },
          ],
        },
        {
          src: Buffet,
          title: "Buffet",
        },
      ],
    },
  ]);

  const [modalData, setModalData] = useState([
    {
      title: "Contact it Support",
      description:
        "We are sorry for inconvenience, we might try to resolve it as soon as possible.",
      icon: <ContactitSupport />,
    },
    {
      title: "Request raised",
      description:
        "We are glad to assist you, please wait for sometime to sever your request.",
      icon: <ConfirmIcon />,
    },
    {
      title: "Location shared succesfully",
      description:
        "Your location has been shared. Our team will contact you shortly",
      icon: <ConfirmIcon />,
    },
    {
      title: "Call Receptionist",
      description: "Reserve me spot for me for buffet",
      icon: <BuffetIcon />,
    },
    {
      title: "Luggage assistance",
      description: "Help me to pickup my Luggage",
      icon: <BuffetIcon />,
    },
    {
      title: "Medical assistance",
      description: "I need a instant medical assistance",
      icon: <BuffetIcon />,
    },
    {
      title: "Order Placed Successfully",
      description:
        "We have received your order, will shortly get in touch with you.",
      icon: <ConfirmIcon />,
    },
  ]);
  const [counter, setCounter] = useState([]);
  const [requestPopup, setRequestPopup] = useState(false);
  const [specialRequest, setSpecialRequest] = useState("");

  const [prepareRequestBody, setPreparedRequestBody] = useState({
    guestName: "Abhijeet",
    guestPhoneNumber: "9528295631",
    roomNumber: "p-201",
    requestedItems: [
      {
        item: "Towels",
        quantity: 2,
      },
      {
        item: "Pillows",
        quantity: 1,
      },
      {
        item: "Bedsheet",
        quantity: 2,
      },
    ],
    specialRequest: "Please deliver by 7 PM.",
  });

  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(false);

  const [roomData, setRoomData] = useState();

  return (
    <DataContext.Provider
      value={{
        specialRequest,
        setSpecialRequest,
        getClientEngineData,
        loading,
        setLoading,
        coreIds,
        clientWebsiteData,
        setClientsWebsiteData,
        hotelDetails,
        setHotelDetails,
        auth,
        setAuth,
        reservationId,
        setReservationId,
        error,
        setError,
        bookingData,
        setBookingData,
        roomNumber,
        setRoomNumber,
        showCart,
        setShowCart,
        HousekeepingAssistance,
        setHouseKeepingAssistance,
        services,
        selectServices,
        counter,
        setCounter,
        prepareRequestBody,
        setPreparedRequestBody,
        requestPopup,
        setRequestPopup,
        amenities,
        setAmenities,
        emergencyServices,
        selectEmergencyServices,
        modalData,
        setModalData,
        requestPopupData,
        selectRequestPopupData,
        showPopupSuppert,
        location,
        setLocation,
        setShowPopupSuppert,
        roomData,
        setRoomData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
