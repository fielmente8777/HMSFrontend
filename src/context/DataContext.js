import { createContext, useState } from "react";
import Pillows from "../images/Pillows.webp";
import Blankets from "../images/Blankets.webp";
import Towels from "../images/Towels.webp";
import Toiletries from "../images/Toiletries.webp";
import RoomCleaning from "../images/RoomCleaning.png";
import BathroomCleaning from "../images/BathroomCleaning.png";
import TapLeakage from "../images/TapLeakage.png";
import Drainage from "../images/Drainage.png";
import PowerOutages from "../images/PowerOutages.png";
import FaultySwitches from "../images/FaultySwitches.png";
import FaultyAppliance from "../images/FaultyAppliance.png";
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
} from "../utils/icon";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [reservationId, setReservationId] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [error, setError] = useState("");
  const [bookingData, setBookingData] = useState(null);
  const [showCart, setShowCart] = useState(false);

  const [services, selectServices] = useState(null);
  const [emergencyServices, selectEmergencyServices] = useState(null);
  const [requestPopupData, selectRequestPopupData] = useState(null);
  const [amenities, setAmenities] = useState([
    {
      icon: <WifiIcon />,
      title: "Wifi assistance",
      description:
        "Connect to WiFi name “Shivadya Tent City” and enter password “123456”.",
    },
    {
      icon: <EmergencyIcon />,
      title: "Emergency",
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
      title: "House Maintenance",
      subtitle: "Plumbing",
      items: [
        {
          src: TapLeakage,
          title: "Tap Leakage",
        },
        {
          src: Drainage,
          title: "Drainage",
        },
      ],
    },
    {
      title: "House Maintenance",
      subtitle: "Electricity",
      items: [
        {
          src: PowerOutages,
          title: "Power Outages",
        },
        {
          src: FaultySwitches,
          title: "Faulty Switches",
        },
        {
          src: FaultyAppliance,
          title: "Faulty Appliance",
        },
      ],
    },
    {
      title: "Luxury Tents",
      subtitle: "",
      items: [
        {
          src: InRoomDining,
          title: "In-Room Dining",
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
  ]);
  const [counter, setCounter] = useState([]);
  const [auth, setAuth] = useState(false);
  const [requestPopup, setRequestPopup] = useState(false);

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

  return (
    <DataContext.Provider
      value={{
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
