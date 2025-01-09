import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import Heading from "../textcomponents/Heading";
import Para from "../textcomponents/Para";
import { ConfirmIcon } from "../../utils/icon";

const RequestRaisedPopup = () => {
  const { setRequestPopup, requestPopup } = useContext(DataContext);
  const handleRaisedRequestPopup = () => {
    setRequestPopup(false);
  };
  return (
    <div
      className={`${
        requestPopup &&
        "fixed flex justify-center items-center w-full top-0 left-0 h-full bg-black/50 px-5 transition-opacity duration-300 ease-in-out"
      } ${requestPopup ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className={`bg-white  border rounded-3xl overflow-hidden border-red-800 w-full transform transition-transform duration-300 ease-in-out ${
          requestPopup ? "scale-100" : "scale-95"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-3 p-4 w-full ">
          <ConfirmIcon />
          <Heading h2 className="text-base text-black font-semibold">
            Request Raised
          </Heading>
          <Para className="text-secondary text-center">
            We are glad to assist you, please wait for sometime to sever your
            request.
          </Para>
          <div className="grid grid-cols-2 items-center justify-center gap-4 w-full">
            <button
              onClick={handleRaisedRequestPopup}
              className="border flex items-center justify-center uppercase border-[#FF432A] text-sm font-semibold py-3  w-full rounded-full text-[#FF432A]"
            >
              My requests
            </button>
            <button
              onClick={handleRaisedRequestPopup}
              className="bg-[#FF432A] flex flex-col items-center font-semibold justify-center text-sm text-white py-3 w-full uppercase tracking-wider rounded-full"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestRaisedPopup;
