import React, { useContext } from "react";
import Heading from "../textcomponents/Heading";
import CardContainer from "../slider/CardContainer";
import DataContext from "../../context/DataContext";

const CommonServiceCard1 = () => {
  const { HousekeepingAssistance } = useContext(DataContext);


  const uniqueTitles = [
    ...new Set(HousekeepingAssistance.slice(0, 5).map((item) => item.title)),
  ];

  return (
    <div className="flex flex-col gap-4">
      {uniqueTitles.map((title, index) => {
        const itemsWithSameTitle = HousekeepingAssistance.filter(
          (item) => item.title === title
        );
        return (
          <React.Fragment key={index}>
            <Heading h2={true} className="text-base ">
              {title}
            </Heading>
            {itemsWithSameTitle.map((item, subIndex) => (
              <React.Fragment key={subIndex}>
                <Heading h3={true} className="text-sm text-secondary">
                  {item.subtitle}
                </Heading>
                <CardContainer data={item.items} heading={item.subtitle} />
              </React.Fragment>
            ))}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CommonServiceCard1;
