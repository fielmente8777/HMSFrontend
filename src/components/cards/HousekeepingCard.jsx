import React from "react";

const HousekeepingCard = ({ title, src }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-full aspect-square bg-[#F4F0F0] rounded-xl">
        <img
          src={src}
          alt={title}
          className="object-contain w-full h-full absolute top-0 left-0"
        />
      </div>
      <h3 className="text-[#272727] text-[0.78rem] font-medium">{title}</h3>
    </div>
  );
};

export default HousekeepingCard;
