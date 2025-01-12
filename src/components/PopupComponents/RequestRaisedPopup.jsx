import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import Heading from "../textcomponents/Heading";
import Para from "../textcomponents/Para";
import { Link } from "react-router-dom";

const RequestRaisedPopup = () => {
  const { setRequestPopup, requestPopup, modalData, requestPopupData } =
    useContext(DataContext);
  const handleRaisedRequestPopup = () => {
    setRequestPopup(false);
  };

  const data = modalData.find((item) => item.title === requestPopupData);
  return (
    <div
      className={`${
        requestPopup &&
        "fixed flex justify-center items-center w-full top-0 left-0 h-full bg-black/50 px-5 transition-opacity duration-300 ease-in-out"
      } ${requestPopup ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className={`bg-white shadow-md rounded-3xl overflow-hidden w-full transform transition-transform duration-300 ease-in-out ${
          requestPopup ? "scale-100" : "scale-95"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-3 p-4 w-full ">
          {data?.icon}
          <Heading h2 className="text-base text-black font-semibold">
            {/* Request Raised */}
            {data?.title}
          </Heading>
          <Para className="text-secondary text-center">
            {/* We are glad to assist you, please wait for sometime to sever your
            request. */}
            {data?.description}
          </Para>
          {data?.title === "Call Receptionist" ?(<div className="grid grid-cols-2 items-center justify-center gap-4 w-full">
            <button
              onClick={handleRaisedRequestPopup}
              className="border flex items-center justify-center uppercase border-[#FF432A] text-sm font-semibold py-3  w-full rounded-full text-[#FF432A]"
            >
              Cancel
            </button>
            <Link
              to="tel:+91 70148 69131"
              className="bg-[#FF432A] flex flex-col items-center font-semibold justify-center text-sm text-white py-3 w-full uppercase tracking-wider rounded-full"
            >
              Call Us
            </Link>
          </div>):
          (<button
            onClick={handleRaisedRequestPopup}
            className="bg-[#FF432A] flex flex-col items-center font-semibold justify-center text-sm text-white py-3 w-full uppercase tracking-wider rounded-full"
          >
            Okay
          </button>)}
        </div>
      </div>
    </div>
  );
};

export default RequestRaisedPopup;
