import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [isAunthenticated, setIsAuthenticated] = useState(false);

  // check if url is valid && isAunthenticated
  // https://grm.eazotel.com/sparvhospita/gao/"2356598"
  const checkValidUrl = async () => {
    try {
      const path = window.location.pathname; // get the current path
      const paths = path.split("/").filter((part) => part); // remove empty parts

      if (paths.length < 3) {
        throw new Error("Invalid URL");
      }
      const [name, locationName, grmid] = paths.slice(-3); // split the path into parts

      const response = await axios.get(
        `https://grm.eazotel.com/?name=${name}&locationName=${locationName}&grmid=${grmid}`
      );

      if (response.status === 200) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
    }
  };
  useEffect(() => {
    checkValidUrl();
  }, []);
  return <>{isAunthenticated ? <Outlet /> : <div>Invalid URL</div>}</>;
};

export default ProtectedRoute;
