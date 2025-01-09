import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full fixed bottom-0 left-0 z-10 box-shadow flex flex-col gap-5 p-5 mt-2 bg-white">
      <div className="flex flex-col gap-4">
        <Link
          to="tel:+91 99999 999999"
          className="bg-[#FF432A] flex flex-col items-center font-semibold justify-center text-sm text-white py-3 px-4 uppercase tracking-wider rounded-full"
        >
          <span>Call the Reception</span>
          <span className="font-medium text-[0.78rem]">+91 99999 999999</span>
        </Link>
        <button className="border flex items-center justify-center border-[#FF432A] text-sm font-semibold py-3 w-full rounded-full text-[#FF432A]">
          Raise a request
        </button>

        {/* <div className="flex justify-center">Developed by Eazotel</div> */}
      </div>
    </div>
  );
};

export default Footer;
