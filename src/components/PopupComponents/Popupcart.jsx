import React, { useContext, useEffect, useState } from "react";
import Heading from "../textcomponents/Heading";
import Para from "../textcomponents/Para";
import { Add, Subtract } from "../../utils/icon";
import DataContext from "../../context/DataContext";
import { RequestAPI } from "../../api/Request";

const Popupcart = () => {
  const {
    showCart,
    setShowCart,
    services,
    counter,
    setCounter,
    setError,
    setRequestPopup,
    selectRequestPopupData,
  } = useContext(DataContext);
  const [specialRequest, setSpecialRequest] = useState("");

  useEffect(() => {
    if (!showCart) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCart]);

  const handleCounter = (type, title) => {
    console.log(type, title);
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
                    ? Math.min(obj.quantity + 1, 5)
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

  const handleRequest = async (title) => {
    try {
      const data = JSON.parse(localStorage.getItem("roomsData"));
      const body = {
        guestName: localStorage.getItem("guestName"),
        guestPhoneNumber: localStorage.getItem("guestNumber"),
        roomNumber: data?.roomId,
        requestedItems: counter,
        specialRequest: specialRequest,
      };

      const response = await RequestAPI(body);

      if (response) {
        setRequestPopup(true);
        selectRequestPopupData(title ? title : "Request raised");
        setShowCart(false);
        setCounter([]);
        setSpecialRequest("");
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
  };

  const handleSubmit = (e, title) => {
    e.preventDefault();
    if (counter.length >= 1 || specialRequest) {
      handleRequest(title);
    } else {
      alert("Can make empty request");
    }
  };

  const handileCancel = () => {
    setShowCart(false);
    setCounter([]);
    setSpecialRequest("");
  };

  const servicesHight =
    services?.items?.length >= 3 ? "56%" : services?.items?.length + 4 + "0%";

  let serviceData = null;
  let foodData = null;
  if (services?.title === "In-Room Dining") {
    foodData = services;
    console.log("haa haaa thik hia ");
  } else {
    serviceData = services;
  }

  console.log(services);
  return (
    <div
      className={`fixed inset-0 bg-black/50 z-50 ${showCart ? "block" : "hidden"
        }`}
    >
      <div
        className={`transition-transform duration-700 ease-linear transform ${showCart ? "translate-y-0" : "translate-y-full"
          }  fixed bottom-0 h-1/2 left-0 w-full p-5 rounded-tr-3xl z-30 rounded-tl-3xl mt-2 bg-white`}
        style={{ height: !serviceData ? "70%" : servicesHight }}
      >
        <div
          className="w-10 bg-[#DADADA] h-1 mx-auto mb-4"
          onClick={() => setShowCart(false)}
        />
        <div className="overflow-y-scroll h-full">
          <div className="flex flex-col gap-4 pb-4">
            {serviceData && (
              <>
                <Heading h3 className="text-primary font-medium">
                  {services?.title}
                </Heading>
                {services?.items.map((item, i) => (
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
                          className={`w-[1.2rem] aspect-square flex items-center justify-center rounded-md border ${counter.find((obj) => obj.item === item.title)
                            ?.quantity < 1
                            ? "border-gray-400"
                            : "border-[#FF432A]"
                            }`}
                        >
                          <Subtract />
                        </button>
                        <span className="text-base w-[1rem] flex items-center justify-center">
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
              </>
            )}

            {foodData && (
              <>
                <Heading h3 className="text-primary font-medium">
                  {foodData?.title}
                </Heading>
                {foodData?.option.map((item, i) => (
                  <div key={i} className="w-full">
                    <Heading
                      h3
                      className="text-secondary text-base font-medium mb-2"
                    >
                      {item.title}
                    </Heading>
                    <div className="flex flex-col gap-2 w-full">
                      {item.food.map((item, i) => (
                        <div className="grid grid-cols-3 items-center w-full">
                          <div className="col-span-2">
                            <Para className="text-sm " key={i}>
                              {item}
                            </Para>
                          </div>
                          <div className="flex items-center w-full gap-3">
                            <button
                              onClick={() => handleCounter("sub", item)}
                              className={`w-[1.2rem] aspect-square flex items-center justify-center rounded-md border ${counter.find((obj) => obj.item === item)
                                ?.quantity < 1
                                ? "border-gray-400"
                                : "border-[#FF432A]"
                                }`}
                            >
                              <Subtract />
                            </button>
                            <span className="text-base w-[1rem] flex items-center justify-center">
                              {counter.find((obj) => obj.item === item)
                                ?.quantity || 0}
                            </span>
                            <button
                              onClick={() => handleCounter("add", item)}
                              className="w-[1.2rem] aspect-square flex items-center justify-center rounded-md border border-[#FF432A]"
                            >
                              <Add />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            <form className="w-full flex flex-col gap-2">
              <label
                htmlFor="request"
                className="text-base text-primary capitalize"
              >
                Special request
                <span className="text-secondary">(optional)</span>
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
                onClick={(e) => serviceData ? handleSubmit(e) : handleSubmit(e, "Order Placed Successfully")}
                className="bg-[#FF432A] flex flex-col items-center font-semibold justify-center text-sm text-white py-3 px-4 uppercase tracking-wider rounded-full"
              >
                {serviceData ? "Raise Request" : "Place order"}
              </button>
              <button
                className="border flex items-center uppercase justify-center border-[#FF432A] text-sm font-semibold py-3 w-full rounded-full text-[#FF432A]"
                onClick={handileCancel}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popupcart;
