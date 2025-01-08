import React, { useContext, useState } from "react";
import { LoginAPI } from "../api/Login";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

const Login = () => {
  const {
    reservationId,
    setReservationId,
    error,
    setError,
    bookingData,
    setBookingData,
    roomNumber,
    setRoomNumber,
  } = useContext(DataContext);

  const navigate = useNavigate();

  const id = "B2024022400002";
  const roomId = "d-101";

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("roomId", reservationId);
    navigate(`/home/?id=${reservationId}`);
    // setError('');

    // try {
    //     const response = await LoginAPI(reservationId);
    //     if (response) {
    //         console.log('Login successful:', response);
    //         setReservationId(response.data.bookingId)
    //         // setBookingData(response.data)
    //         localStorage.setItem('bookingData', JSON.stringify(response.data));

    //         navigate(`/home/?id=${response.data.bookingId}`);
    //     } else {
    //         setError('Invalid reservation ID');
    //     }
    // } catch (err) {
    //     setError(err.message || 'Something went wrong!');
    // }
  };

  return (
    <div className="">
      <div className="relative w-full aspect-[4/2.5]">
        <img
          src="./images/erabanner.webp"
          alt="banner"
          className="object-cover w-full h-full absolute top-0 left-0"
        />
      </div>
      <div className="flex w-full h-[69.5vh] flex-col gap-8 p-6 rounded-tr-3xl rounded-tl-3xl relative bg-white z-10 -top-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-[#121212]">
            Welcome to Era Camps by Shivadya
          </h1>
          <p className="text-base text-[#5F5F5F]">
            We are glad to see you here
          </p>
        </div>
        <form className="flex flex-col w-full h-full " onSubmit={handleSubmit}>
          <div className="flex flex-col flex-1 gap-3 w-full h-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="booking-number" className="text-black text-base">
                Booking Number
              </label>
              <input
                type="text"
                placeholder="Enter your booking number"
                id="booking-number"
                value={reservationId}
                onChange={(e) => setReservationId(e.target.value)}
                className="border-b focus:outline-none outline-none border-[#FF432A] py-2 px-2"
              />
            </div>
            <div className="flex items-center gap-3 text-lg">
              <input type="checkbox" id="Remember-me" className="" />
              <label htmlFor="Remember-me">Remember me</label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#FF432A] text-lg text-white py-3 px-4 uppercase tracking-wider rounded-full"
          >
            Login
          </button>
        </form>
      </div>
      <div className="hidden">
        <div className="text-5xl font-semibold mt-20">
          Enter your Reservation Id
        </div>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-10">
          <input
            type="text"
            placeholder="Room Number or Reservation Id"
            value={reservationId}
            className="text-base border border-gray-500 py-2 px-2"
            onChange={(e) => setReservationId(e.target.value)}
          />
          {/* <p>or</p>
                <input type='text' placeholder='Enter Room Number'
                    value={roomNumber}
                    className='text-base border border-gray-500 py-2 px-2'
                    onChange={(e) => setRoomNumber(e.target.value)}
                /> */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="border text-white p-2 px-10 bg-gray-600"
            >
              {"-->"} Next
            </button>
          </div>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
