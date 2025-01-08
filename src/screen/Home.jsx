import React, { useEffect, useState } from 'react';

const Home = () => {
    const [bookingData, setBookingData] = useState(null);

    // Function to fetch booking data from localStorage
    const fetchData = () => {
        const data = localStorage.getItem('bookingData');
        if (data) {
            try {
                setBookingData(JSON.parse(data)); // Parse the JSON data
            } catch (error) {
                console.error("Error parsing booking data from localStorage:", error);
            }
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data on component mount
    }, []);

    return (
        <div className='px-5'>
            {bookingData ? (
                <div>
                    <h2>Booking Details</h2>
                    <p>Adults: {bookingData.Adults}</p>
                    <p>Children: {bookingData.Children}</p>
                    <p>Children: {bookingData.bookingId}</p>
                    {/* Render other booking data */}
                </div>
            ) : (
                <p>Loading booking data...</p>
            )}
        </div>
    );
};

export default Home;
