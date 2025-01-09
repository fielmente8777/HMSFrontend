import React from "react";

const Heading = ({ h1, h2, h3, h4, h5, h6, className = "", children }) => {
  return (
    <>
      {h1 && <h1 className={`text-primary font-medium capitalize ${className}`}>{children}</h1>}
      {h2 && <h2 className={`text-primary font-medium capitalize ${className}`}>{children}</h2>}
      {h3 && <h3 className={`text-primary font-medium capitalize ${className}`}>{children}</h3>}
      {h4 && <h4 className={`text-primary font-medium capitalize ${className}`}>{children}</h4>}
      {h5 && <h5 className={`text-primary font-medium capitalize ${className}`}>{children}</h5>}
      {h6 && <h6 className={`text-primary font-medium capitalize ${className}`}>{children}</h6>}
    </>
  );
};

export default Heading;
