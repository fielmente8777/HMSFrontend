import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center px-5 py-4 bg-white shadow-md">
                <div className="flex items-center">
                    <img
                        src="/logo192.png"
                        alt="Logo"
                        className="h-10 cursor-pointer"
                    />
                </div>
                <div className="flex items-center">
                    <img
                        src="/logo192.png"
                        alt="Profile"
                        className="h-10 w-10 rounded-full cursor-pointer"
                    />
                </div>
            </nav>
        </div>
    )
}

export default Navbar