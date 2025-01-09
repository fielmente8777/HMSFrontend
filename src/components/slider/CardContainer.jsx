import React from "react";
import HousekeepingCard from "../cards/HousekeepingCard";

const CardContainer = ({ data, heading }) => {
  return (
    <div className="flex overflow-x-scroll pb-4">
      {data.map((item, index) => (
        <div key={index} className="me-4">
          <HousekeepingCard
            {...item}
            heading={heading}
          />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
