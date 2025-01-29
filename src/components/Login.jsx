import React, { useContext, useEffect, useState } from "react";
import { LoginAPI } from "../api/Login";
import { useNavigate, useLocation } from "react-router-dom";
import DataContext from "../context/DataContext";
import Loader from "./Loader";
import Loaderone from "./Loaderone";

const Login = () => {
  const {
    reservationId,
    setReservationId,
    error,
    setError,
    hotelDetails,
    coreIds,
    loading,
    setLoading,
  } = useContext(DataContext);
  const [guestName, setGuestName] = useState("");
  const [guestNumber, setGuestNumber] = useState("");
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // const id = "B2024022400002";
  // const roomId = "d-101";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoad(true);
      const response = await LoginAPI(reservationId);
      if (response) {
        localStorage.setItem("guestName", guestName);
        localStorage.setItem("guestNumber", guestNumber);
        const currentTime = Date.now();
        localStorage.setItem("lastClearTime", currentTime);


        if (response.exists) {
          localStorage.setItem("roomsData", JSON.stringify(response.data));
          navigate(
            `/home/?id=${localStorage.getItem(
              "hotelid"
            )}&hid=${localStorage.getItem("hid")}&reservationid=${response.data.roomId
            }`
          );
        } else {
          localStorage.setItem("bookingData", JSON.stringify(response.data));
          navigate(
            `/home/?id=${localStorage.getItem(
              "hotelid"
            )}&hid=${localStorage.getItem("hid")}&reservationid=${response.data.bookingId
            }`
          );
        }
        setLoad(false);
      } else {
        setLoad(false)
        setError("Invalid reservation ID");
      }
    } catch (err) {
      setLoad(false)
      setError(err.message || "Something went wrong!");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("roomsData")) {
      const roomData = JSON.parse(localStorage.getItem("roomsData"));
      navigate(
        `/home/?id=${localStorage.getItem(
          "hotelid"
        )}&hid=${localStorage.getItem("hid")}&reservationid=${roomData?.roomId}`
      );
    }
  }, []);

  return (
    <div className="">
      {hotelDetails?.BgImage ? <>
        <div className="relative w-full aspect-[4/2.5]">
          <img
            src={hotelDetails?.BgImage}
            alt="banner"
            className="object-cover w-full h-full absolute top-0 left-0"
          />
        </div>
        <div className="flex w-full h-[69.5vh] flex-col gap-8 p-6 rounded-tr-3xl rounded-tl-3xl relative bg-white z-10 -top-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl capitalize font-semibold text-[#121212]">
              Welcome to {hotelDetails?.HotelName}
            </h1>
            <p className="text-base text-[#5F5F5F]">
              We are glad to see you here
            </p>
          </div>
          <form className="flex flex-col w-full h-full " onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 w-full h-full mb-8">
              <div className="flex flex-col gap-1">
                <label htmlFor="booking-number" className="text-black text-base">
                  Room Number
                </label>
                <input
                  type="text"
                  placeholder="Enter room number"
                  id="booking-number"
                  value={reservationId}
                  onChange={(e) => setReservationId(e.target.value)}
                  className="border-b focus:outline-none outline-none border-[#FF432A] py-2"
                />
              </div>
              {error && <p className="error-message text-[#FF432A]">{error}</p>}
              <div className="flex flex-col gap-1">
                <label htmlFor="guest-name" className="text-black text-base">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  id="guest-name"
                  value={guestName}
                  required
                  onChange={(e) => setGuestName(e.target.value)}
                  className="border-b focus:outline-none outline-none border-[#FF432A] py-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone-number" className="text-black text-base">
                  Phone Number
                </label>
                <input
                  type="text" // Use "text" instead of "number" to control the length more effectively
                  required
                  maxLength={10} // This ensures users cannot type more than 10 characters
                  placeholder="Enter your number"
                  id="phone-number"
                  value={guestNumber}
                  onChange={(e) => {
                    const input = e.target.value;
                    // Allow only numbers and ensure input length does not exceed 10
                    if (/^\d*$/.test(input) && input.length <= 10) {
                      setGuestNumber(input);
                    }
                  }}
                  className="border-b focus:outline-none outline-none border-[#FF432A] py-2"
                />
              </div>
              <div className="flex items-center gap-3 text-lg">
                <input type="checkbox" id="Remember-me" className="w-4 h-4" />
                <label htmlFor="Remember-me">Remember me</label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#FF432A] text-lg flex justify-center items-center text-white py-3 px-4 uppercase active:scale-95 tracking-wider rounded-full"
            >
              {load ? <p className="py-1"><Loader /></p> : "Login"}
            </button>
          </form>
        </div>
      </>
        :
        <div className="flex justify-center items-center h-screen">
          <Loaderone />
        </div>
      }
    </div>


  );
};

export default Login;
