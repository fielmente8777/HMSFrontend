import React, { useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
const NotFound = () => {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold mb-4 text-[#FF432A]">404</h1>
            <p className="text-xl mb-4">Page Not Found</p>
            <a href="/" className="text-blue-500 underline">Go to Home</a>
        </div>
    )
}

export default NotFound