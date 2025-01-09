import React, { useContext } from "react";
import HousekeepingCard from "../cards/HousekeepingCard";
import DataContext from "../../context/DataContext";

const CardContainer = ({ data, heading }) => {
  const { showCart, setShowCart, services, selectServices } = useContext(DataContext);
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
