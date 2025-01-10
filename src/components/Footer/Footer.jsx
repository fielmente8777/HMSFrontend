import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";

const Footer = () => {
  const { setRequestPopup, selectRequestPopupData } =
    useContext(DataContext);
  const handleCilck = () => {
    selectRequestPopupData("Contact it Support");
    setRequestPopup(true);
  };
  return (
    <div className="w-full fixed bottom-0 left-0 z-10 box-shadow flex flex-col gap-5 p-5 mt-2 bg-white">
      <div className="flex flex-col gap-4">
        <button
          onClick={handleCilck}
          className="bg-[#FF432A] flex flex-col items-center font-semibold justify-center text-[0.78rem] text-white py-2 px-4 uppercase tracking-wider rounded-full"
        >
          <span>Call the Reception</span>
          <span className="font-medium text-[0.7rem]">+91 99999 999999</span>
        </button>
        <Link
          to="/raise-a-equest"
          className="border flex items-center justify-center border-[#FF432A] text-sm font-semibold py-3 w-full rounded-full text-[#FF432A]"
        >
          Raise a request
        </Link>

        {/* <div className="flex justify-center">Developed by Eazotel</div> */}
      </div>
    </div>
  );
};

export default Footer;
