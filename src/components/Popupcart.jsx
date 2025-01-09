import React from "react";
import Heading from "./textcomponents/Heading";
import { Add, Subtract } from "../utils/icon";
// import { MdAddBox } from "react-icons/md";
import Pillows from "../images/Pillows.webp";

const Popupcart = ({ showCart,data }) => {
  return (
    <div className={`${showCart ? "block w-full mb-5 overflow-y-scroll" : "hidden"}`}>
      <div className="flex flex-col gap-4">
        <Heading h3 className="text-primary font-medium">
          Your cart is empty
        </Heading>
        {[1, 2, 3].map((item, i) => (
          <div key={i} className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-4">
                <div className="w-[4rem] aspect-square relative">
                  <img
                    src={Pillows}
                    // src={item.src}
                    alt={item.title}
                    className="object-contain px-2 w-full h-full absolute top-0 left-0"
                  />
                </div>
                <span>title</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-[1.5rem] aspect-square flex items-center justify-center rounded-md border border-[#FF432A]">
                  <Subtract />
                </button>
                <span>count</span>
                <button className="w-[1.5rem] aspect-square flex items-center justify-center rounded-md border border-[#FF432A]">
                  <Add />
                </button>
              </div>
            </div>
          </div>
        ))}

        <form className="w-full flex flex-col gap-2">
          <label htmlFor="request" className="text-base text-primary capitalize">
            Special request<span className="text-secondary">(option)</span>
          </label>
          <input
            type="text"
            placeholder="Enter your extra request here"
            id="request"
            // value={}
            // onChange={(e) => setReservationId(e.target.value)}
            className="border-b focus:outline-none outline-none border-[#FF432A] py-2"
          />
        </form>
      </div>
    </div>
  );
};

export default Popupcart;
