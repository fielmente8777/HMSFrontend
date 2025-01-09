import { createContext, useState } from 'react';
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

const DataContext = createContext({});



export const DataProvider = ({ children }) => {
    const [reservationId, setReservationId] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [error, setError] = useState('');
    const [bookingData, setBookingData] = useState(null);
    const [showCart, setShowCart] = useState(false);

    const [services, selectServices] = useState(null)
    const [HousekeepingAssistance, setHouseKeepingAssistance] = useState(
        [
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
                ]
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
                ]
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
                ]
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
                ]
            },
        ]
    )
    const [counter, setCounter] = useState([]);
    const [auth, setAuth] = useState(false);
    const [requestPopup, setRequestPopup] = useState(false);

    const [prepareRequestBody, setPreparedRequestBody] = useState(
        {
            "guestName": "Abhijeet",
            "guestPhoneNumber": "9528295631",
            "roomNumber": "p-201",
            "requestedItems": [
                {
                    "item": "Towels",
                    "quantity": 2
                },
                {
                    "item": "Pillows",
                    "quantity": 1
                },
                {
                    "item": "Bedsheet",
                    "quantity": 2
                }
            ],
            "specialRequest": "Please deliver by 7 PM."
        }
    );

    return (
        <DataContext.Provider
            value={{
                auth, setAuth,
                reservationId, setReservationId,
                error, setError,
                bookingData, setBookingData,
                roomNumber, setRoomNumber,
                showCart, setShowCart,
                HousekeepingAssistance, setHouseKeepingAssistance,
                services, selectServices,
                counter, setCounter,
                prepareRequestBody, setPreparedRequestBody,
                requestPopup, setRequestPopup
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
