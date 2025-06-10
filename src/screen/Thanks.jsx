import React, { useEffect } from "react";
import { replace, useNavigate } from "react-router-dom";

const Thanks = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //     const userNoLongerExists = localStorage.getItem('hasDoneFeedback');
  //     if (userNoLongerExists === "false") {
  //         navigate('/login', { replace: true });
  //     }
  // }, []);
  const clearFeedbackLocalStorage = () => {
    localStorage.removeItem("guestName");
    localStorage.removeItem("guestNumber");
    localStorage.removeItem("lastClearTime");
    localStorage.removeItem("roomsData");
    localStorage.removeItem("hid");
    localStorage.removeItem("hotelid");
    localStorage.removeItem("hasDoneFeedback");
  };

  useEffect(() => {
    window.addEventListener("beforeunload", clearFeedbackLocalStorage);
    return () => {
      window.removeEventListener("beforeunload", clearFeedbackLocalStorage);
    };
  }, []);

  return (
    <div className="flex flex-col px-5 items-center justify-center h-screen bg-gradient-to-br from-orange-100 to-orange-300">
      <div className="p-8 bg-white rounded-md shadow-lg text-center max-w-md">
        <h1 className="text-2xl font-bold text-[#FF432A] mb-4">
          Thank You for Staying With Us!
        </h1>
        <p className="text-gray-700 mb-6">
          We truly appreciate your time and hope to see you again soon.
        </p>
        <button className="bg-[#FF432A] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#FF432A] transition-all">
          Book Again
        </button>
      </div>
    </div>
  );
};

export default Thanks;
