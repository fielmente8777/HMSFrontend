import React, { useContext, useState } from "react";
import Heading from "../textcomponents/Heading";
import { Add, Subtract } from "../../utils/icon";
// import { MdAddBox } from "react-icons/md";
import DataContext from "../../context/DataContext";
import { Link } from "react-router-dom";
import { RequestAPI } from "../../api/Request";
import RequestRaisedPopup from "./RequestRaisedPopup";

const Popupcart = () => {
  const {
    showCart,
    setShowCart,
    services,
    selectServices,
    counter,
    setCounter,
    setError,
    prepareRequestBody,
    setPreparedRequestBody,
    requestPopup,
    setRequestPopup,
  } = useContext(DataContext);
  const [canRequest, setCanRequest] = useState(false);
  const [specialRequest, setSpecialRequest] = useState("");

  const handleCounter = (type, title) => {
    console.log("Clicked", type, title);
    setCounter((prevCounter) => {
      const itemExists = prevCounter.find((obj) => obj.item === title);
      if (itemExists) {
        return prevCounter
          .map((obj) =>
            obj.item === title
              ? {
                  ...obj,
                  quantity:
                    type === "add"
                      ? obj.quantity + 1
                      : Math.max(obj.quantity - 1, 0),
                }
              : obj
          )
          .filter((obj) => obj.quantity > 0);
      } else if (type === "add") {
        return [
          ...prevCounter,
          {
            item: title,
            quantity: 1,
          },
        ];
      } else {
        return prevCounter;
      }
    });
  };
  console.log(counter);

  const handleRequest = async () => {
    try {
      const data = JSON.parse(localStorage.getItem("roomsData"));
      const body = {
        guestName: localStorage.getItem("guestName"),
        guestPhoneNumber: localStorage.getItem("guestNumber"),
        roomNumber: data?.roomId,
        requestedItems: counter,
        specialRequest: specialRequest,
      };

      // console.log(body);
      const response = await RequestAPI(body);

      if (response) {
        setRequestPopup(true);
        setShowCart(false);
        setCounter([]);
        setSpecialRequest("");
      }

      console.log(response);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (counter.length >= 1 || specialRequest) {
      handleRequest();
      console.log(specialRequest);
    } else {
      alert("Can make empty request");
    }
  };

  const handileCancel = () => {
    setShowCart(false);
    setCounter([]);
    setSpecialRequest("");
  };
  return (
    <div
      className={`${
        showCart ? "block w-full mb-5 overflow-y-scroll" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-4">
        <Heading h3 className="text-primary font-medium">
          Make your request
        </Heading>
        {Array.isArray(services) &&
          services.map((items, i) => (
            <div key={i} className="">
              <p>{items.title}</p>
              {items.items.map((item, i) => (
                <div key={i} className="w-full mb-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-[4rem] aspect-square relative bg-[#F4F0F0] rounded-xl">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="object-contain px-2 w-full h-full absolute top-0 left-0"
                        />
                      </div>
                      <div>
                        <p className="text-base">{item.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleCounter("sub", item.title)}
                        className="w-[1.2rem] aspect-square flex items-center justify-center rounded-md border border-[#FF432A]"
                      >
                        <Subtract />
                      </button>
                      <span>
                        {counter.find((obj) => obj.item === item.title)
                          ?.quantity || 0}
                      </span>
                      <button
                        onClick={() => handleCounter("add", item.title)}
                        className="w-[1.2rem] aspect-square flex items-center justify-center rounded-md border border-[#FF432A]"
                      >
                        <Add />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

        <form className="w-full flex flex-col gap-2">
          <label
            htmlFor="request"
            className="text-base text-primary capitalize"
          >
            Special request<span className="text-secondary">(option)</span>
          </label>
          <input
            type="text"
            placeholder="Enter your extra request here"
            id="request"
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            className="border-b focus:outline-none outline-none border-[#FF432A] py-2"
          />
        </form>

        <div className="w-full flex flex-col gap-4 mt-5">
          <button
            onClick={handleSubmit}
            className="bg-[#FF432A] flex flex-col items-center font-semibold justify-center text-sm text-white py-3 px-4 uppercase tracking-wider rounded-full"
          >
            Raise Request
          </button>
          <button
            className="border flex items-center uppercase justify-center border-[#FF432A] text-sm font-semibold py-3 w-full rounded-full text-[#FF432A]"
            onClick={handileCancel}
          >
            cancel
          </button>
        </div>
      </div>
      <RequestRaisedPopup />
    </div>
  );
};

export default Popupcart;
