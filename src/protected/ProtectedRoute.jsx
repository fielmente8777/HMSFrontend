import React, { useState } from 'react'

const ProtectedRoute = () => {

    const [isAunthenticated, setIsAuthenticated] = useState(false);

    // check if url is valid && isAunthenticated
    const checkValidUrl = async () => {
        try {
            const path = window.location.pathname; // get the current path
            const paths = path.split("/"); // split the path into an array of strings

        } catch (error) {
            
        }
    }
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute