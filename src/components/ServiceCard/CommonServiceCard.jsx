import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import AmenityCard from "../cards/AmenityCard";

const CommonServiceCard = () => {
  const { amenities } = useContext(DataContext);

  return (
    <div className="grid grid-cols-2 gap-4">
      {amenities.map((amenity) => (
        <AmenityCard key={amenity.title} {...amenity} />
      ))}
    </div>
  );
};

export default CommonServiceCard;
