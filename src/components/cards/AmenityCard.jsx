import React from "react";

const AmenityCard = ({ icon, title }) => {
  return (
    <div className="flex items-center py-4 px-3 gap-2 bg-[#F4F0F0] rounded-xl">
      <span>{icon}</span>
      <span className="font-medium text-[0.78rem] capitalize text-[#121212]">
        {title}
      </span>
    </div>
  );
};

export default AmenityCard;
